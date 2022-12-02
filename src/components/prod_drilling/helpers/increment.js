export const increment = cont => {
    if(typeof cont === 'number')
        return ++cont;
    throw new Error(`${cont} no es un número válido`);
}