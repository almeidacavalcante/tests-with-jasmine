describe("Pessoa", () => {
    it("Deve calcular o IMC", () => {
        var pessoa = new Pessoa("Almeida", 29, 73, 1.75);

        expect(pessoa.imc()).toEqual(73/(1.75*1.75));
    })
})