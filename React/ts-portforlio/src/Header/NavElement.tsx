export default function NavElement(props:any){
    return(
        <a 
        className="transition-all duration-300 ease-in-out inline-block
        hover:text-secondary-green
        hover:scale-110"
        href={props.link}>{props.text}</a>
    )
}