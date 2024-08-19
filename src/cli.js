import fs from 'fs' ;//faz a importação da bibliotaca FileSistem//utiliza o modo mais recente de importação,precisa adicionar o "type":"module" no package.json
import trataErros from './erros/funcoesErros.js';
import { contaPalavra } from './index.js';

const caminhoArquivo = process.argv;// modulo que permite que o node receba parametros em um array no teminal
const link = caminhoArquivo[2];// recebe o parametro passado no teminal no indice 2
const endereco = caminhoArquivo[3];
fs.readFile(link, 'utf-8', (erro, texto) => {//inicia a função readFile, nativa da biblioteca FS, que faz a leitura do arquivo. Por ser um arquivo de texto é necessario utiliza o parametro UTF-8 que padroniza os caracteres.
    try {
        if (erro) throw erro
        const resultado = contaPalavra(texto);
        criaESalvaArquivo(resultado, endereco )
    } catch (erro) {
        console.log(trataErros(erro));
    }
})

async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado');
        
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