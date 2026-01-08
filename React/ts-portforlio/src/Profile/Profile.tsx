import CardEd from "./CardEd"
import CardHab from "./CardHab"
import CardExp from "./CardExp"

export default function Profile() {

    const CV_URL: string = "https://mini-enigma.vercel.app/static/CV_BrayhamPavonMartell.pdf?v=2";

    return (
        <section id="Profile"
            className="w-screen min-h-lvh
        grid grid-cols-1 lg:grid-cols-2 
        bg-surface-background gap-10 p-5 lg:p-15">
            <div className="flex flex-col p-10 gap-5">
                <small className="bg-primary-background p-2
                rounded-2xl border border-secondary-green
                w-1/2 lg:w-1/5 text-center">
                    Perfil profesional</small>
                <h2 className="text-5xl">Más sobre mí</h2>
                <p className="text-2xl text-text-body">
                    Soy un profesional motivado por el aprendizaje continuo y la
                    colaboración en equipos multidisciplinarios. <br />Tengo
                    conocimientos en desarrollo web junto con amplio interés en el desarrollo
                    móvil y multiplataforma para construir proyectos innovadores
                    que optimicen la experiencia de vida y trabajo de las personas.
                </p>
                <div className="mt-10 bg-primary-background p-10
                rounded-3xl border border-border-light
                transition-all duration-700 ease-in-out
                hover:scale-103">
                    <h3 className="text-3xl flex items-center gap-3">
                        <img className="h-9"
                            src="/icons/educacion.svg" alt="" loading="lazy"/>
                        Educación</h3>
                    <ul>
                        <CardEd
                            date="2025"
                            univ="Instituto Tecnológico de Toluca"
                            title="Ingeniería en Sistemas Computacionales" />
                        <CardEd
                            date="2019"
                            univ="CBTIS 203"
                            title="Técnico en Electrónica" />
                    </ul>
                </div>
                <div className="mt-10 bg-primary-background p-10
                rounded-3xl border border-border-light
                transition-all duration-700 ease-in-out
                hover:scale-103">
                    <h3 className="text-3xl flex items-center gap-3">
                        <img className="h-9"
                            src="/icons/expe.svg" alt="" loading="lazy" />
                        Experiencia Profesional</h3>
                    <ul>
                        <CardExp
                            year="Enero 2025 - Agosto-2025"
                            lugar="Hospital Médica Mía"
                            funciones="Residencia profesional como Desarrollador Web"
                        />
                        <CardExp
                            year="Junio 2024 - Diciembre 2025"
                            lugar="Centro de Investigación y Posgrado del Instituto Tecnológico de Toluca"
                            funciones="Desarrollador de Software Para Investigación"
                        />
                    </ul>
                </div>
            </div>
            <div className="flex flex-col p-10 gap-5">
                <h3 className="text-3xl">Habilidades técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-15">
                    <div className="bg-primary-background rounded-2xl
                    p-5 border border-border-light
                    transition-all duration-700 ease-in-out
                    hover:scale-103">
                        <h4 className="text-xl text-center flex gap-2">
                            <img src="/icons/lenguajes.svg" alt="" className="w-5" loading="lazy" />
                            Lenguajes y frameworks</h4>
                        <div className="flex flex-col sm:flex-row justify-evenly p-3">
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
                    p-5 border border-border-light text-center
                    transition-all duration-700 ease-in-out
                    hover:scale-103">
                        <h4 className="text-xl flex gap-2">
                            <img src="/icons/git.svg" alt="" className="w-5" loading="lazy" />
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
                    <h3 className="text-3xl">Habilidades Blandas</h3>
                    <ul className="flex flex-wrap gap-5 p-5">
                        <CardHab
                            hab="Trabajo en equipo" />
                        <CardHab
                            hab="Colaboración Interdisciplinaria" />
                        <CardHab
                            hab="Trabajo bajo presión" />
                        <CardHab
                            hab="Pasión por aprender" />
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row justify-between bg-secondary-green
                px-10 py-5 rounded-4xl mt-10 items-center border
                transition-all duration-700 ease-in-out
                hover:scale-103 gap-5">
                    <p className="text-xl text-text-dark">¿Interesado en mi perfil?
                        <br /> <small className="text-sm">Descarga aquí mi CV para ver más detalles</small>
                    </p>
                    <a href={CV_URL} target="_blank" rel="noopener noreferrer" download="BrayhamPavonMartell_CV.pdf"
                    className="bg-primary-background
                    px-10 py-3 rounded-2xl border-2 border-border-primary-green
                    transition-all duration-300 ease-in-out
                    hover:scale-110
                    ">
                        Descargar</a>
                </div>
            </div>
        </section>
    )
}
