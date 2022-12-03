import { increment } from "../../../src/components/prod_drilling/helpers/increment"

describe('Prueba sobre el helper "increment"', () => { 
     test('Validar que se pasa un parámetro a la función increment para error Throw',()=>{
        //console.log(increment());
        expect(()=>increment()).toThrow('undefined no es un número válido');
     })

     test('Pasamos en la función incrementar un NO número para error Throw',()=>{
        const notANumber = "Error";
        expect(()=>increment(notANumber)).toThrow(`${notANumber} no es un número válido`);
        //expect(increment(notANumber)).toEqual(expect.any(Number));
     })

     test('Pasamos número',()=>{
        const number = 4;
        const numberPlusOne = increment(number);
        expect(numberPlusOne).toEqual(expect.any(Number));
        expect(numberPlusOne).toBe(5);

     })
 })