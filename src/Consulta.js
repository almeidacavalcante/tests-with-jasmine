class Consulta {

    constructor(paciente, procedimentos, particular, retorno){
        this._paciente = paciente;
        this._procedimentos = procedimentos;
        this._particular = particular;
        this._retorno = retorno;
    }

    preco(){
        if(this._retorno) return 0;

        var precoFinal = 0;

        _procedimentos.forEach(proc => {
            if("raio-x" == proc) precoFinal += 55;
            else if("gesso" == proc) precoFinal += 32;
            else if("tala" == proc) precoFinal += 29;
            else precoFinal += 25;
        });

        if(this._particular) precoFinal *= 2;

        return precoFinal;
    }
    
}