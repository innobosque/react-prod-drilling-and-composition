// Props sin destructuring
export const ButtonIncrent = (props) => {
  return (
    <button onClick={()=>props.onIncrement()}>Nieto +1 (counter: {props.counter})</button>
  )
}