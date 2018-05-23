class Consulta {

    constructor(paciente, procedimentos, particular, retorno, data){
        this._paciente = paciente;
        this._procedimentos = procedimentos;
        this._particular = particular;
        this._retorno = retorno;
        this._data = data;
    }


    preco(){
        if(this._retorno) return 0;

        var precoFinal = 0;

        this._procedimentos.forEach(proc => {
            if("raio-x" == proc) precoFinal += 55;
            else if("gesso" == proc) precoFinal += 32;
            else if("tala" == proc) precoFinal += 29;
            else precoFinal += 25;
        });

        if(this._particular) precoFinal *= 2;

        return precoFinal;
    }

    finalizarConsulta(paciente) {
        let dayMilisseconds = 1000 * 60 * 60 * 24;
        let twentyFiveDaysMilisseconds = 25 * dayMilisseconds;
        let today = new Date().getTime();
        let diaDoRetorno = new Date(twentyFiveDaysMilisseconds + today);
        
        if (diaDoRetorno.getDay() == 0){
            diaDoRetorno = new Date(twentyFiveDaysMilisseconds + today + dayMilisseconds);
            console.log("D1: ", diaDoRetorno.getDate());
            
        }else if (diaDoRetorno.getDay() == 6){
            diaDoRetorno = new Date(twentyFiveDaysMilisseconds + today + (2*dayMilisseconds));
            console.log("D2: ", diaDoRetorno.getDate());
        }

        let consultaRetorno = new Consulta(paciente, [], false, true, diaDoRetorno);
        return consultaRetorno;
    }
    

    isRetorno(){
        return this._retorno;
    }

    isParticular(){
        return this._particular;
    }

    getProcedimentos(){
        return this._procedimentos;
    }

    getPaciente(){
        return this._paciente;
    }
}