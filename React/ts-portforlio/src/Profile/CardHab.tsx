export default function CardHab(props:any){
    return (
        <li className="bg-primary-background py-3 px-5 rounded-2xl
        border-2 border-border-ligth
        transition-all duration-700 ease-in-out
        hover:scale-103">
            {props.hab}</li>
    )
}