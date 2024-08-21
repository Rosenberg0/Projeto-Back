import fs from 'fs' ;//faz a importação da bibliotaca FileSistem//utiliza o modo mais recente de importação,precisa adicionar o "type":"module" no package.json
import path from 'path';
import chalk from 'chalk';
import trataErros from './erros/funcoesErros.js';
import { contaPalavra } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';

const program = new Command();
program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de rersultados')
    .action((options) =>{
        const{ texto, destino} = options
        
        if(!texto || !destino){
            console.error(chalk.red('erro -- favor inserir caminho de origem e destino'));
            program.help();
            return
        }
        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);
        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('texto processado com sucesso'));
        } catch (erro) {
            console.log(chalk.red('ocorreu um erro no processamento', erro));
        }
    })
program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {//inicia a função readFile, nativa da biblioteca FS, que faz a leitura do arquivo. Por ser um arquivo de texto é necessario utiliza o parametro UTF-8 que padroniza os caracteres.
        try {
            if (erro) throw erro
            const resultado = contaPalavra(texto);
            criaESalvaArquivo(resultado, destino )
        } catch (erro) {
            console.log(chalk.red(trataErros(erro)));
        }
    })
}


async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras =montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.green('Arquivo criado'));
        
    } catch (erro) {
        throw erro;
    }
}
/* 
function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log('Arqiivo criado');
        }).catch((erro) =>{
            throw erro
        }).finally(() => {
            console.log('operação finalizada');
        })
} */