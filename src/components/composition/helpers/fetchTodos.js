export const getTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(response.ok)//status in the range 200-299
         return await response.json() || [];
        else
            throw Error(`Error inesperado (${response.status}): ${response.statusText}`);
        
    } catch (error) {
        throw Error(`Error inesperado: ${error.message}`);
    }
}