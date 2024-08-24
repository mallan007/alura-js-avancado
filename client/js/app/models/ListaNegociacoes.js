class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get negociacoes() {
        return [].concat(this._negociacoes); //retorna uma copia da variável this._negociacoes, sem poder alterar a original;
    }
}