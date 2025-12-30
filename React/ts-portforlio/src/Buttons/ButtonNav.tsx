export default function ButonNav(props:any){
    return(
        <a href={props.link}
        className="bg-tr-green text-tx-green 
        pt-2 pb-2 pl-6 pr-6
        flex justify-center text-center max-w-2/5
        rounded-md
        transition-all duration-300 ease-in-out
        hover:scale-110
        ">
            {props.text}
        </a>
    )
}