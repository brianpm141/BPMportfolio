export default function Proyectos() {
    return (
        <section id = "proyectos">
        
        <h1>Mis proyectos</h1>

            <article className = "card" id="inventarios">
                <div className="img_element">
                    <div className="carousel-container">
                        <div className="carousel-slide">
                            <img src="img/Inventarios/Asignacion.png" alt="Asignación" />
                            <img src="img/Inventarios/Captura Gestion equipos.png" alt="Captura Gestion equipos" />
                            <img src="img/Inventarios/Categorias.png" alt="Categorias" />
                            <img src="img/Inventarios/Reportes.png" alt="Reportes" />
                            <img src="img/Inventarios/Ubicaciones.png" alt="Ubicaciones" />
                        </div>
                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                </div>
                <div className = "info_element">
                    <h2>Aplicación web de manejo de inventarios</h2>
                    <p>Aplicación para la gestión de inventarios, creada a la medida
                        para cumplir las necesidades específicas de una mediana empresa.
                    </p>
                    <button className = "extend" id = "inventarios_btn" >Ver más</button>
                </div>
            <div className= "ext_element" id = "ext_inventarios" ></div>
            </article>

        </section>
    )
}