class Negociacao { 
    constructor(data, quantidade, valor) { 
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
//Atributos privados são iniciados com _ e só podem ser acessados apenas dentro da classe
    }
    obterVolume() {
        return volume = this._quantidade * this._valor;
 
    }

    getData() {
        return this._data;
    }

    getQuantidade() {   
        return this._quantidade;            
    }   

    getValor() {    
        return this._valor;
    }   
 
}