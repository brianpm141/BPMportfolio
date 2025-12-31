export default function Profile(){
    return (
        <section id="Profile"
        className="
        min-h-lvh w-screen p-10">
            <h2 className="text-4xl font-semibold mb-10">Mas sobre mi</h2>
        
            <div className="grid grid-cols-2 gap-5">
            
            <div className="grid grid-rows-2 p-5
            bg-amber-400">
                <article>
                    <h3>Educacion</h3>
                    <p>Egresado de <strong>Instituto Tecnologico de Toluca</strong></p>
                </article>
                <article>
                    <h3>Experiencia Profecional</h3>
                    <div>
                        <h4>Departamento de Investigacion y posgrado</h4>
                        <p>Resumen: Me hice bien pendejo</p>
                        <ul>
                            <li>sin logros</li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Hospital Medica Mia</h4>
                        <p>Residencia profecional en Desarrollo web</p>
                        <p>Resumen: Me hice mas pendejo</p>
                        <ul>
                            <li>sin logros</li>
                        </ul>
                    </div>
                </article>
            </div>

            <div className="grid grid-rows-4 p-5
            bg-amber-200 ">
                <article>
                    <h3>Lenguajes</h3>
                    <ul>
                        <li>Español(limitado)</li>
                    </ul>
                </article>
                <article>
                    <h3>Frameworks y librerias</h3>
                </article>
                <article>
                    <h3>Plataformas y gerramientas</h3>
                    <ul><li>ninguno</li></ul>
                </article>
                <article>
                    <h3>Habilidades</h3>
                    <ul>
                        <li>Me toco la pansita con el dedo</li>
                    </ul>
                </article>
            </div>
 
            </div>
                       
        </section>
    )
}