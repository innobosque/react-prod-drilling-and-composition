export const getTodos = async (url = 'https://jsonplaceholder.typicode.com/posts') => {
    try {
        const response = await fetch(url);
        if (response.ok)//status in the range 200-299
            return await response.json() || [];
        else
            throw Error(`Error inesperado (${response.status}): ${response.statusText}`);

    } catch (error) {
        throw Error(`Error inesperado: ${error.message}`);
    }
}