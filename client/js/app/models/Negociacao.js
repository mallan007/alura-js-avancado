class Negociacao { 
    constructor(data, quantidade, valor) { 
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;//'this' acessa a instância que está sendo acessada  
        this._valor = valor;//Atributos privados são iniciados com _ e só podem ser acessados apenas dentro da classe
        Object.freeze(this); //Evitar que seja alterado em tempo de execução. Porém, ele não é Deep Freeze, apenas Shallow   
    }
    get volume() {
        return this._quantidade * this._valor;
 
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {   
        return this._quantidade;            
    }   

    get valor() {    
        return this._valor;
    }   
 
}