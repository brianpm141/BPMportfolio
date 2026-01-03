import NavElement from "./NavElement"
import logo from "../assets/logo.png"

export default function Header(){

    return(
        <header className="bg-surface-background/70
        backdrop-blur-sm
        border-b-2 border-border-light
        fixed top-0 w-screen h-17 px-10 py-3 z-502
        flex items-center justify-between
        font-medium
        ">
            <div className="flex gap-2 items-center" >
            <a href="#home" className="flex items-center">
                <img src = {logo}  alt="Logo" className="h-17" /> 
                <span><strong className="text-primary-green text-2xl">BPM</strong> Portafolio de Software</span>
            </a>
            </div>
            <ul className="flex gap-5">
                
                <li>
                    <NavElement href="#projects">Proyectos</NavElement>
                </li>
                <li>
                    <NavElement href="#Profile">Perfil</NavElement>    
                </li>
                <li>
                    <NavElement href="#Contacto">Contacto</NavElement>
                </li>
            </ul>
        </header>
    )

}