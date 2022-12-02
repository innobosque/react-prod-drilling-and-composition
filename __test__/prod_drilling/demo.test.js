describe('Pruebas en demo', () => {
    const CP = {
        valid: '15401',
        invalid: '1',
        invalidText: 'Código postal no válido'
    }
    
    const codigoPostal =  texto => {
        if(!/^[0-9]{5}$/.test(texto = texto.trim()))
          throw new Error(`${CP.invalidText} [${texto}]`);
        return texto;
    }
    
    test('Esta prueba no debe de fallar',()=>{
        //inicialización
        //estímulo
        //aserción --> observar el comportamiento ... esperado
    })
    
    test(`Validar código ${CP.valid}`,()=>{
        expect(codigoPostal(CP.valid)).toBe(CP.valid)
    })

    test(`Validar que el código con espacios lo retorne sin espacios`,()=>{
        expect(codigoPostal(' 11111 ')).toBe(`11111`)
    })
    
    test('Validar si el código es inválido',()=>{
        //Aserción
        expect(()=>codigoPostal(CP.invalid)).toThrow(`${CP.invalidText} [${CP.invalid}]`);
        
    })
    
    test('La constante "saludo" no debe de tener espacios en blanco',()=>{
        //inicialización
        const saludo = 'Hola mundo';
    
        //estímulo
        const saludo2 = saludo.trim();
    
        //aserción
        expect(saludo).toBe(saludo2);
        expect(saludo2).toBeTruthy();
        expect(Number(saludo2)).toBeNaN();//Comprobamos que es NaN
    })
})