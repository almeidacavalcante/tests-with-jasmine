class Pessoa {

    constructor(nome, idade, peso, altura){
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }

    print(){
        console.log(`Nome: ${this._nome} - Idade: ${this._idade}`);
    }

    batimentos(){
        return this._idade * 365 * 24 * 60 * 80;
    }

    imc(){
        return this._peso / (this._altura * this._altura);
    }

}