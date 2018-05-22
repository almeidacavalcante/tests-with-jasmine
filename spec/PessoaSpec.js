describe("Pessoa", () => {
    it("Deve calcular o IMC", () => {
        var pessoa = new Pessoa("Almeida", 29, 73, 1.75);

        expect(pessoa.imc()).toEqual(73/(1.75*1.75));
    })

    it("Deve calcular os batimentos", () => {
        var pessoa = new Pessoa("Almeida", 29, 73, 1.75);

        expect(pessoa.batimentos()).toEqual(pessoa._idade * 365 * 24 * 60 * 80);
    })
})