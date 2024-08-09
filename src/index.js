
const fs = require('fs');//faz a importação da bibliotaca FileSistem

const caminhoArquivo = process.argv;// modulo que permite que o node receba parametros em um array no teminal
const link = caminhoArquivo[2];// recebe o parametro passado no teminal no indice 2

fs.readFile(link, 'utf-8', (erro, texto) => {//inicia a função readFile, nativa da biblioteca FS, que faz a leitura do arquivo. Por ser um asquivo de texto é necessario utiliza o parametro UTF-8 que padroniza os caracteres.
    verificaPalavrasDuplicadas(texto);       //depois ela recebe uma função de seta, com erro e com texto para ser lido
})



function verificaPalavrasDuplicadas(texto) {// inicai a função que separa as palavras do texto
    const listaPalavras = texto.split(' '); //utiliza o metodo de array para separar as stings a cada espaço
    const resultado = {};//cria o objeto para gardar o resultado
    listaPalavras.forEach(palavra => { // o forEach que vai percorrer as palavras do array
        resultado[palavra] = (resultado[palavra] || 0)+1// parra cada incidencia da palavra vai adicionar um ao seu elemento no obj
    })
    console.log(resultado)
}

