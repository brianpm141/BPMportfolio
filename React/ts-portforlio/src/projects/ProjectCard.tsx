import ButonNav from "../Buttons/ButtonNav"

export default function ProjectCard(props: any) {



    return (
        <article className="bg-surface-background
        flex flex-col justify-evenly
        rounded-4xl p-8 gap-5 h-auto
        transition-all duration-300 ease-in-out
        hover:scale-101
        " >
            <div className="flex items-center h-1/3 w-full overflow-hidden
            rounded-2xl relative">
                <img
                    src={props.img}
                    alt="Portada"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
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
                <ButonNav href={props.repository} target="_blank" >Ver Repositorio</ButonNav>
            </div>
        </article>
    )
}