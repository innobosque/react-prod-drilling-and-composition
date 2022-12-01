import {useTodos,ListTodos,RenderTodos} from '.';



export const AppComposition = () => {
  // Obtención de los datos y métodos de tratamiento de los mismos
  //console.log("jeje")
  const {todos,loading,error,handleDelete} = useTodos();

  if(error.status) 
    return (<strong role="alert">{error.statusText}</strong>);

  return (
    <>
    {/* Composition */}
    <RenderTodos>
      {
        loading ? 
          <strong role="alert" aria-busy="true">Cargando</strong> 
          : 
          <ListTodos todos={todos} onDelete={handleDelete} />
      }      
    </RenderTodos>
    </>
  )
}
