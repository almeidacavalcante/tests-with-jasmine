class ConsultaBuilder {

    constructor() {
        this._paciente = new PessoaBuilder().build();
        this._procedimentos = ['proc1', 'proc2'];
        this._particular = false;
        this._retorno = false;
        this._date = new Date();
    }

    build(){
        return new Consulta(this._paciente, this._procedimentos, this._particular, this._retorno, this._date);
    }

    

    procedimentos(procedimentos){
        this._procedimentos = procedimentos;
        return this;
    }

    particular(particular){
        this._particular = particular;
        return this;
    }

    retorno(retorno){
        this._retorno = retorno;
        return this;
    }
}