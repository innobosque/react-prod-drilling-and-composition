import { increment } from "../../../src/components/prod_drilling/helpers/increment"

describe('Prueba sobre el helper "increment"', () => { 
     test('Validar que se pasa un parámetro a la función increment',()=>{
        //console.log(increment());
        expect(()=>increment()).toThrow('undefined no es un número válido');
     })

     test('Pasamos en la función incrementar un NO número',()=>{
        const notANumber = "Error";
        expect(()=>increment(notANumber)).toThrow(`${notANumber} no es un número válido`);
        //expect(increment(notANumber)).toEqual(expect.any(Number));
     })

     test('Pasamos número',()=>{
        const number = 4;
        expect(increment(number)).toEqual(expect.any(Number));
        expect(increment(number)).toBe(5);
     })
 })