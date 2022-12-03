import { getTodos } from "../../../src/components/composition/helpers/fetchTodos"

describe('Validando la API fetch en la función getTodos()', () => { 

    const item =  {
        userId: 7,
        id: 63,
        title: 'voluptas',
        body: 'enim'
    }
    test('Que la promesa obtenga un array de objectos', async ()=>{
        const data = await getTodos();
        expect(data.length).toBeGreaterThan(1);
        expect(data[0].userId).toEqual(expect.any(Number));
        expect(data[0]).toEqual({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
        });
    })

 })