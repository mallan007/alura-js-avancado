class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //Pega o document (HTML) e atribui a variável '$', enxugando o código.

        this._inputData = $('#data');//Pega o ID do input do document e atribui a variável '$'.
        this._inputQuantidade = $('#quantidade'); //Agora, mesmo que façamos 300 negociações, ele só fará uma busca no DOM pelos elementos.
        this._inputValor = $('#valor');   
    }
    /* Sempre que executamos o querySelector, ele irá no DOM (uma árvore de elementos).
     O querySelector terá que buscar entre todos estes elementos. 
     Porém, a API de DOM é um tanto "preguiçosa" e não gosta de executar essa ação. */
    adiciona(event){
        event.preventDefault();
        
            let data = new Date(...this._inputData.value    // SpreadOperator = 3 pontos para cada elemento do Array
                .split('-')
                .map((item, indice) => {
                    if (indice == 1) {
                    return item - 1;
                    }
                    return item;
                })
            //Gambiarra sem o If: return item - indice % 2 (Só 0 2º Elemento, que vale 1, será usado)
            //Reescrevendo com ArrowFunction: .map((item, indice) => item - indice % 2));: Omite-se: 'function', '{}' e 'return' se em uma única linha.
            );
            console.log(data);
            //let data = new Date(...this._inputData.value.replace('/-/g, ','')); //Regex global: trocar todos os '-' por ','
        this._negociacao = new Negociacao(
            data, //Necessário incluir método para formatar String -> Data.
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(this._negociacao);


    }

}