import ButonNav from "../Buttons/ButtonNav"

export default function ProjectCard(props:any){

    const tecnologies:string[] = props.tecnologies 

    return(
        <article className="bg-surface-background
        flex flex-col justify-between
        rounded-4xl p-8 gap-5 h-auto

        " >
            <div className="flex items-center">
                <img src={props.img} alt="Portada" 
                className="rounded-2xl h-max border-2 border-border-ligth/34" />
            </div>
            <div className="flex flex-col p-5 gap-3">
                <h3 className="text-3xl font-semibold">
                {props.title}</h3>
                <p className="text-text-body">{props.description}</p>
                
                {/** 
                <div className="flex gap-2 flex-col">
                    <p className="font-light mb-2">Tecnologias Utilizadas</p>
                
                <ul className="flex gap-8 justify-center">
                    { tecnologies.map( (tecnology) => (
                        <li key={tecnology}
                        className="bg-sd-green rounded-md p-1"
                        >{tecnology}</li>
                    )) } 
                </ul>
                </div>
                */}
                <ButonNav
                text="Ver repositorio"
                link ={props.repository}/>
            </div>
        </article>
    )
}