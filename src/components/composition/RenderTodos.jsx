// Este es un HOC (Higher Order Component)
export const RenderTodos = ({children}) => {
  return (
    <section>
        <header>
          <h1>Composition</h1>
          <h2>Evitando el <strong>Prod drilling</strong></h2>
          <blockquote cite="https://medium.com/the-non-traditional-developer/how-to-avoid-prop-drilling-with-composition-6862cd4e253a">
          Prop drilling is when a prop is passed to a Component only for the sole purpose of passing it down to a child.
          </blockquote>
          <p>
            El presente componente (RenderTodos.jsx) no recibe ningún <mark>props</mark> de su padre. Pero utilizamos aquí su propiedad <strong>children</strong> para que sus descendientes sí que los puedan capturar desde un nivel superior.
          </p>
        </header>
        <hr />
        <ul>
            {children}
        </ul>
    </section>
  )
}
