export default function ButonNav(props:any){
    console.log(props.link)
    return(
        <a href={props.link} target="_blank"
        className="bg-secondary-green
        py-3 px-8
        flex justify-center text-center
        rounded-3xl mt-5
        text-text-dark

        transition-all duration-300 ease-in-out
        hover:scale-110
        hover:bg-primary-green
        ">
            {props.text}
        </a>
    )
}