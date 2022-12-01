import { ButtonIncrent } from "./ButtonIncrent"

export const HeaderComponent = ({counter,onIncrement}) => {
    return <div style={{backgroundColor: 'orange'}}>
    <header>
        <h2>Hijo</h2>
        <p>Este componente sólo hace de transición para pasar las <mark>props</mark> desde su padre hasta su hijo que es el <em>button</em></p>
    </header>

    {/* Las propiedades (props) recibidos del padre se las pasamos de nuevo al hijo como atributos */}
    <ButtonIncrent counter={counter} onIncrement={onIncrement} />
    </div>
}