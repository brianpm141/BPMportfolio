import "../styles/sobreMi.css"
import "../styles/web.css"

export default function SobreMi() {
    return (
        <section id="sobremi">

            <h1 className="section-title">Más sobre mí</h1>

            <div className="aboutme">
                <aside className="my_info"> 
                    <div className="geninfo">
                        <img src="" alt="Aquí mi foto" loading="lazy"/>
                        <div>
                            <h4>Brayham Pavon Martell</h4>
                            <p> <strong>Ingeniero en Sistemas Computacionales.</strong> 
                                <br/>
                                Egresado del Instituto Tecnológico de Toluca (Foto con título en proceso)</p>
                        </div>
                    </div>
                    <div className="fortalezas">
                        <h5>Fortalezas</h5>
                        <ul>
                            <li>Resolución de problemas</li>
                            <li>Trabajo con equipos multidisciplinarios</li>
                            <li>Comodidad de trabajo con consola de comandos</li>
                            <li>Interés por Linux</li>
                            <li>Redacción de estándares de calidad</li>
                        </ul>
                    </div>
                </aside>

                <aside className="second_info">
                    <h4>Lenguajes</h4>
                    <ul>
                        <li>Python</li>
                        <li>HTML - CSS</li>
                        <li>Java</li>
                        <li>Java Script</li>
                        <li>TypeScript</li>
                    </ul>
                </aside>

                <aside className="second_info">
                    <h4>Frameworks y Librerías</h4>
                    <ul>
                        <li>Angular</li>
                        <li>React</li>
                        <li>FastAPI</li>
                        <li>Express</li>
                        <li>Flet</li>
                    </ul>
                </aside>

                <aside className="second_info">
                    <h4>Plataformas y Herramientas</h4>
                    <ul>
                        <li>Git y Github</li>
                        <li>Docker</li>
                        <li>Figma</li>
                        <li>Postman</li>
                        <li>Vercel</li>
                    </ul>
                </aside>

                <aside className="second_info">
                    <h4>Motivaciones</h4>
                    {/* CAMBIO: Estilo en línea corregido a objeto JS */}
                    <p style={{ marginTop: '0' }}>Ellos son brigitte y Maximo, los mejores compañeros del mundo.</p>
                    {/* CAMBIO: La ruta de la imagen se usa desde la variable importada */}
                    <img src="" alt="fotos de brig y max" loading="lazy" />
                </aside>
            </div>
        </section>
    )
}