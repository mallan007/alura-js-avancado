class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('Esse método deve ser implementado!');
    }
    
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}