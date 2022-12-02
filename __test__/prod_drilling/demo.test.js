test('Esta prueba no debe de fallar',()=>{
    //inicialización
    //estímulo
    //aserción --> observar el comportamiento ... esperado
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