import NavElement from "./NavElement"
import logo from "../assets/logo.png"

export default function Header(){

    return(
        <header className="bg-surface-background/70
        backdrop-blur-sm
        border-b-3 border-border-ligth/80
        fixed top-0 w-screen h-17 p-3 z-50
        flex items-center justify-between
        font-medium
        ">
            <div className="flex gap-2 items-center" >
            <a href="#home" className="flex items-center">
                <img src = {logo}  alt="Logo" className="h-17" /> 
                <span><strong className="text-primary-green text-2xl">BMP</strong> Portafolio de Software</span>
            </a>
            </div>
            <ul className="flex gap-5">
                <li> <NavElement 
                text="Proyectos" 
                link = "#projects"/> </li>
                <li> <NavElement 
                text="Perfil"
                link = "#Profile"/> </li>
                <li> <NavElement 
                text="Contacto"
                link="#Contacto"/> </li>
            </ul>
        </header>
    )

}