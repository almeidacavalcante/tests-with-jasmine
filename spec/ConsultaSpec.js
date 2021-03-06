describe("Consulta", () => {

    var almeida;
    beforeEach( () => {
        almeida = new PessoaBuilder().build();
    })
    
    describe("Tipo Retorno", () => {
        it("Deve não cobrar o retorno", () => {
    
            let consulta = new Consulta(almeida, [], true, true);
    
            expect(consulta.preco()).toEqual(0);
        })
        
        it("Apesar dos procedimentos, é retorno então deve dar zero!", () => {
            let consulta = new Consulta(almeida, ['raio-x'], true, true);
    
            expect(consulta.preco()).toEqual(0);
        })
    })

    it("Consulta normal deve ser 55 com raio-x", () => {
        let consulta = new ConsultaBuilder().procedimentos(['raio-x']).build();

        expect(consulta.preco()).toEqual(55);
    })

    it("Consulta particular deve ser 55 * 2 = 110 com raio-x", () => {
        let consulta = new Consulta(almeida, ['raio-x'], true, false);

        expect(consulta.preco()).toEqual(110);
    })


    it("Consulta comum com procedimentos não cadastrados deve dar 25 reais.", () => {
        let consulta = new Consulta(almeida, ['proc-1', 'proc-2'], false, false);

        expect(consulta.preco()).toEqual(50);
    })

    it("Deve agendar uma consulta para 25 dias para a frente!", () => {
        let consulta = new ConsultaBuilder().build();

        let dayMilisseconds = 1000 * 60 * 60 * 24;
        let twentyFiveDaysMilisseconds = 25 * dayMilisseconds;
        let today = new Date().getTime();
        let con = new Consulta(almeida, [], false, false);
        diaDoRetorno = new Date(twentyFiveDaysMilisseconds + today + (dayMilisseconds))

        console.log('DIA DO RETORNO: ', diaDoRetorno.getDate());


        expect(consulta.finalizarConsulta(almeida)._data.getDate()).toEqual(diaDoRetorno.getDate());
    })
})