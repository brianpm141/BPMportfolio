import CardEd from "./CardEd"
import CardHab from "./CardHab"
import CardExp from "./CardExp"

export default function Profile(){


    return (
        <section id = "Profile" 
        className="w-screen min-h-lvh
        grid grid-cols-2 
        bg-surface-background gap-10 p-15">
            <div className="flex flex-col p-10 gap-5">
                <small className="bg-primary-background p-2
                rounded-2xl border border-secondary-green
                w-1/5 text-center">
                    Perfil profecional</small>
                <h2 className="text-5xl">Mas sobre mi</h2>
                <p className="text-2xl text-text-body">
                    Soy un profecional motivado por el aprendizaje continuo y la
                    colaboracion en equipos multidiciplinarios. <br />Tengo 
                    conocimientos en desarrollo web junto con amplio interes en el desarrollo
                    movil y multiplataforma para construir proyectos innovadores
                    que optimizen la experiencia de vida y trabajo de las personas.
                </p>
                <div className="mt-10 bg-primary-background p-10
                rounded-3xl border border-border-ligth">
                    <h3 className="text-3xl flex items-center gap-3">
                        <img className="h-9"
                        src="https://www.svgrepo.com/show/428085/study-university.svg" alt="" />
                        Educacion</h3>
                    <ul>
                        <CardEd
                        date="2025"
                        univ = "Instituto tecnologico de Toluca"
                        title = "Ingenieria en Sistemas Computacionales"/>
                        <CardEd
                        date="2019"
                        univ = "CBTIS 203"
                        title = "Tecnico en Electronica"/>
                    </ul>
                </div>
                <div className="mt-10 bg-primary-background p-10
                rounded-3xl border border-border-ligth">
                    <h3 className="text-3xl flex items-center gap-3">
                        <img className="h-9"
                        src="https://www.svgrepo.com/show/486919/work-case.svg" alt="" />
                        Experiencia Profecional</h3>
                    <ul>
                        <CardExp
                        year="Enero 2025 - Agosto-2025"
                        lugar="Hospital Medica Mia"
                        funciones = "Residencia profecional como Desarrollador Web"
                        />
                        <CardExp
                        year = "Junio 2024 - Diciembre 2025"
                        lugar = "Centro de Investigacion y Posgrado del Instituto Tecnologico de Toluca"
                        funciones = "Achichintle de investigacion"
                        />
                    </ul>
                </div>
            </div>
            <div className="flex flex-col p-10 gap-5">
                <h3 className="text-3xl">Hablilidades tecnicas</h3>
                <div className="grid grid-cols-2 gap-15">
                    <div className="bg-primary-background rounded-2xl
                    p-5 border border-border-ligth">
                        <h4 className="text-xl text-center flex gap-2">
                            <img src="https://www.svgrepo.com/show/280695/programmer.svg" alt="" className="w-5" />
                            Lenguajes y frameworks</h4>
                        <div className="flex justify-evenly p-3">
                        <ul className="">
                           <li>HTML-CSS</li>
                           <li>Tailwind</li>
                           <li>JavaScript</li>
                           <li>TypeScript</li>
                           <li>Python</li>
                        </ul>
                        <ul>
                            <li>React</li>
                            <li>Angular</li>
                            <li>FastApi</li>
                            <li>Flet</li>
                        </ul>
                        </div>
                    </div>
                    <div className="bg-primary-background rounded-2xl
                    p-5 border border-border-ligth text-center">
                        <h4 className="text-xl flex gap-2"> 
                            <img src="https://www.svgrepo.com/show/497412/programming-arrows.svg" alt="" className="w-5" />
                         Herramientas y Entornos</h4>
                        <ul className="p-3">
                            <li>Git-Github</li>
                            <li>Docker</li>
                            <li>PostMan</li>
                            <li>Vercel</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-3xl">Hablilidades Blandas</h3>
                    <ul className="flex flex-wrap gap-5 p-5">
                        <CardHab
                        hab = "Trabajo en equipo"/>
                        <CardHab
                        hab = "Colaboracion Interdiciplinaria"/> 
                    </ul>
                </div>
                <div className="flex justify-between bg-secondary-green
                px-10 py-5 rounded-4xl mt-10 items-center border">
                    <p className="text-xl text-text-dark">¿Interesado en mi perfil?
                        <br/> <small className="text-sm">Descarga aqui mi CV para ver mas detalles</small>
                    </p>
                    <a href="" className="bg-primary-background
                    px-10 py-3 rounded-2xl border-2 border-border-primary-green
                    transition-all duration-300 ease-in-out
                    hover:scale-110
                    ">
                        Descargar</a>
                </div>
            </div>
        </section>
    )}
        