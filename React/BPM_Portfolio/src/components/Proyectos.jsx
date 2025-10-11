import "../styles/proyectos.css"

export default function Proyectos(props) {
    return (
        <section id = "proyectos">
        
        <h1>Mis proyectos</h1>

            <article className = "card" id="inventarios">
                <div className="img_element">
                    <div className="carousel-container">
                        <div className="carousel-slide">
                            <img src={props.mainImg} alt="Main image" />
                        </div>
                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                </div>
                <div className = "info_element">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <button className = "extend" id = "inventarios_btn" >Ver más</button>
                </div>
            <div className= "ext_element" id = "ext_inventarios" ></div>
            </article>

        </section>
    )
}