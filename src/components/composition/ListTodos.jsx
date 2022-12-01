import React from 'react'

export const ListTodos = ({ todos, onDelete }) => {
    //console.log(todos)
    return (
        <>

            {
                todos.length && todos.map(item => {
                    return (<li key={item.id}>
                        <section>
                            <header>
                                <h2>{item.id} {item.title}</h2>
                            </header>
                            <div>
                                {item.body}
                            </div>
                            <button onClick={() => onDelete(item.id)}>Eliminar</button>
                        </section>
                    </li>)
                })
            }
        </>
    )
}
