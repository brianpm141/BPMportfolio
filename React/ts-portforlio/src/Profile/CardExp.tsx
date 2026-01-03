export default function CardExp(props:any){
    return(
        <li className="mt-5 text-text-body ml-5">
            <p className="flex flex-col gap-1 text-xl">
                <small className="text-secondary-green">{props.year}</small>
                <strong className="text-text-main">{props.lugar}</strong>
                {props.funciones}
                {/** 
                 * 
                <details className="m-5 group
                open:bg-amber-400 
                transition-transform duration-300">
                    <summary className="list-none bg-surface-background
                    p-3 rounded-3xl border w-fit">
                        Ver Mas Detalles</summary>
                    <ul>
                        <li>ioterm</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </details>
                 * 
                */}
                
            </p>
        </li>
    )
}