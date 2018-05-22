class PessoaBuilder {

    constructor(){
        this._nome = 'Almeida';
        this._idade = 29;
        this._peso = 73;
        this._altura = 1.75;
    }

    build(){
        return new Pessoa(this._nome, this._idade, this._peso, this._altura);
    }

    peso(peso){
        this._peso = peso;
        return this; 
    }

    altura(altura){
        this._altura = altura
    }
    
}