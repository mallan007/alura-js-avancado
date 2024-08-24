class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template( model ) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
                </thead>
                
                <tbody>
                 ${model.negociacoes.map(negociacao => {
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `}).join('')} 
                </tbody>
                <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)
                    }
                </td>
                </tfoot>    
            </table>  `;
    }//Join concatena todas as strings em uma única. Ao invés de criar um array para ser exibida na tela.

    update(model) {
        this._elemento.innerHTML = this._template(model); //innerHTML pega a String e converte-a em HTML e atribui ao elemento do DOM.

    }
}
/*
 ls 33 a 38 : Immediately-invoked function expression (IIFE) ou a função imediata.
 Trata-se de um recurso usado na criação de escopo em JavaScript,
  que nos ajudará a colocar um bloco na expressão, sendo executado 
  imediatamente. No caso, o $ receberá o total.

  l32 : A função reduce() executará uma arrow function, que recebe como parâmetro 
  as variáveis total e negociacao   . Cada vez que varrermos os elementos do array, o total 
  será o que tínhamos (inicializando pelo 0) somado ao volume. No fim, o reduce()
   retornará o resultado de total. É uma maneira funcional de lidarmos com problema
    para totalizar o volume. Como a função retornará um único valor, não foi 
    necessário utilizar a IIFE para incluirmos várias instruções dentro do forEach().

  l34 : A função reduce recebe dois parâmetros: uma função e um valor inicial. Na função 
  interna ao reduce, o primeiro parâmetro é o valor da última iteração. O segundo parâmetro
   é o valor da iteração atual. O reduce executa sua função interna a cada iteração.   
*/