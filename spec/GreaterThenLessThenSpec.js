describe("Maior e Menor", () => {
    it("Deve entender numeros em ordem decrescente", () => {
        var algorimo = new GreaterThenLessThen([9,7,5,3,1,0]);   
        
        expect(algorimo.menor).toEqual(0);
        expect(algorimo.maior).toEqual(9);
    })
    
    it("Deve entender numeros em ordem não sequencial", () => {
        var algorimo = new GreaterThenLessThen([2,5,4,7,1,0,12]);   
        
        expect(algorimo.menor).toEqual(0);
        expect(algorimo.maior).toEqual(12);
    })

    it("Deve entender numeros em ordem crescente", () => {
        var algorimo = new GreaterThenLessThen([0,1,2,3,4,9]);   
        
        expect(algorimo.menor).toEqual(0);
        expect(algorimo.maior).toEqual(9);
    })

    it("Deve entender arrays com 1 elemento apenas e retornar o mesmo valor do menor e do maior!", () => {
        var algorimo = new GreaterThenLessThen([0]);   
        
        expect(algorimo.menor).toEqual(0);
        expect(algorimo.maior).toEqual(0);
    })
})