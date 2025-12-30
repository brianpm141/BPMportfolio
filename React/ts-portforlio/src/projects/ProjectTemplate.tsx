import ProjectCard from "./ProjectCard"

export default function ProjectTemplate(){
    return (
        <section className="flex flex-col p-15 
        h-screen min-h-lvh gap-2
        bg-bs-green
        border-t-4 border-b-4 border-sd-green/60
        ">
            <h2 className="text-4xl font-semibold"> Mis proyectos Destacados</h2>
            <p className="font-light">Algnos de mis proyectos favoritos</p>    
        
            <ProjectCard 
            title = "Texto test"/>
            <ProjectCard 
            title = "Texto test"/>
            <ProjectCard 
            title = "Texto test"/>

        </section>
    )
}