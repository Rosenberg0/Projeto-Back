function filtrarOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal ='';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtrarOcorrencias(paragrafo).join(', ');
        if (duplicadas.length > 1){
            textoFinal += `Palavras Duplicadas no Parágrafo ${indice + 1}: ${duplicadas} \n`
    }
    })
    return textoFinal
}



export{montaSaidaArquivo}