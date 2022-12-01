import { useEffect, useState } from "react";
import { getTodos } from "../helpers";


export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({status: false});
    
    const handleDelete = id => {
        const data = todos.filter(el=>el.id!==id);
        data && setTodos(data);
    }
    
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getTodos();
                setTodos(data);                
            } catch (err) {
                setError({
                    status: true,
                    statusText: err.message 
                })
            }
            setLoading(false);
        }
        loadData();
    }, [])

    return {
        todos,
        loading,
        error,
        handleDelete
    }
}