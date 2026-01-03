export default function CardEd(props:any){
    return(
        <li className="mt-5 text-text-body ml-5">
            <p className="flex flex-col gap-1 text-xl">
                <small className="text-secondary-green">{props.date}</small>
                <strong className="text-text-main">{props.title}</strong>
                {props.univ}
            </p>
        </li>
    )
}