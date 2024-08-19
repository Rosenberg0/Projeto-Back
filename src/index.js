export function contaPalavra(texto){
    const paragrafos = extraiParagrafo(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo)return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    
    console.log(contagem);
    
}
function extraiParagrafo(texto){
    return texto.toLowerCase().split('\n');// deste modo iremos quebrar a  cada aparição do \n que é um caracter que indica a quebra de linha. Também iremos transformar tudo em minuscula
}


function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');// o replaca ira trocar um caracter por outro, no caso esta trocadno um caracter especial por um vazio
}

function verificaPalavrasDuplicadas(texto) {// inicai a função que separa as palavras do texto
    const listaPalavras = texto.split(' '); //utiliza o metodo de array para separar as stings a cada espaço
    const resultado = {};//cria o objeto para gardar o resultado
    listaPalavras.forEach(palavra => { // o forEach que vai percorrer as palavras do array
        if(palavra.length >=3){
        const palavraLimpa = limpaPalavras(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0)+1// parra cada incidencia da palavra vai adicionar um ao seu elemento no obj
    } })
    return resultado;
}

