import imagen from "../../assets/inventarios/Asignacion.png"

export default function ProCard(props) {
    
    return (
        <div className="card" id={props.id}>
            <img src={imagen} alt="imagen de carrucel" loading="lazy"/>
            <h2>Aplicacion de control de inventarios</h2>
            <p>Aplicacion Web cliente servidor para el control
                de inventarios, generacion de reportes y automatizacion de procesos
                de formatos.
            </p>
            <a href="" target="_blank" rel="noopener noreferrer">Ver detalles</a>
        </div>
    )
}