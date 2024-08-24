class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); 

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade'); 
        this._inputValor = $('#valor');   

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update( this._listaNegociacoes );

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update( this._mensagem );
    }

    adiciona(event){
        event.preventDefault();
  
        this._listaNegociacoes.adiciona(this._criaNegociacao()); 
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._negociacoesView.update( this._listaNegociacoes );
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    };

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),                         
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

      _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}
/*
l4 : Pega o document (HTML) e atribui a variável '$', enxugando o código.
l6 : Pega a propriedade 'ID' do input do document HTML e atribui a variável '$' na script JS.
l7 : Mesmo que sejam feitas 300 negociações, o QuerySelector só fará uma busca no DOM pelos elementos:
     Sempre que executamos o querySelector, ele irá no DOM (uma árvore de elementos).
     O querySelector terá que buscar entre todos estes elementos. 
     Porém, a API de DOM é um tanto "preguiçosa" e não gosta de executar essa ação. 
l15 : Date é enemurada por default com os meses de 0 a 11, sendo necessário criar um método de manipulação de data para correção.
l14 e l15 : Criado um método para chamar o mecanismo de conversão de data, passando o valor de 'this._inputData.value' como argumento.
l18 : Data tem o seu valor convertido de String para Date, de forma a ser manipulada na função 'negociacao'.
l25 : Após a manipulação da função 'negociacao', Date pode ser convertido de volta para String, de forma a ser manipulável.
*/