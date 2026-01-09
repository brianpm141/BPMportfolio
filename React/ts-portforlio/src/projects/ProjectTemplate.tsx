import ProjectCard from "./ProjectCard"
import projectsData from "../data/projects.json"
import type { Proyecto } from "../data/types"
import EnigmaCard from "./EnigmaCard"


export default function ProjectTemplate() {
    const proyectos: Proyecto[] = projectsData as Proyecto[]

    return (
        <section className="flex flex-col p-15 
        w-full gap-8 bg-primary-background
        border-b-2 border-border-ligth"
            id='projects'>

            <div className="border border-border-ligth " />

            <h2 className="text-3xl font-semibold mt-10"> Mis proyectos destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {proyectos.map(proyecto => (<ProjectCard
                    key={proyecto.id}
                    img={proyecto.imagenes.portada}
                    title={proyecto.nombre}
                    description={proyecto.descripcion}
                    tecnologies={proyecto.tecnologias}
                    repository={proyecto.repositorio}
                />))}

                <EnigmaCard />

            </div>

        </section>
    )
}