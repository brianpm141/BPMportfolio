export default function ProCard(props) {

    return (
        <div className="card" id={props.id}>
            <img src={props.imagenes[0].url} alt="imagen de carrucel" loading="lazy"/>
            <div style={{ width: "90%" }}>
                <h2>{props.nombre}</h2>
                <p>{props.descripcion}</p>
            </div>
            <a href="" target="_blank">Ver detalles</a>
        </div>
    )
}