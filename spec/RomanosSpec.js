describe("Consulta", () => {
    
    describe("Romanos", () => {
        it("Testa conversão de Romano para Arábico III", () => {
    
            let romanos = new Romanos("III");
    
            expect(romanos.toArabic()).toEqual(1);
        })
    })

    describe("Romanos", () => {
        it("Testa conversão de Romano para Arábico IV", () => {
    
            let romanos = new Romanos("IV");
    
            expect(romanos.toArabic()).toEqual(4);
        })
    })

    describe("Romanos", () => {
        it("Testa conversão de Romano para Arábico XIV", () => {
    
            let romanos = new Romanos("XIV");
    
            expect(romanos.toArabic()).toEqual(14);
        })
    })
})