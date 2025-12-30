import NavElement from "./NavElement"
import logo from "../assets/logo.png"

export default function Header(){

    return(
        <header className="bg-bs-green/40
        backdrop-blur-sm
        border-b-2 border-sd-green/50
        fixed top-0 w-screen h-17 p-3 z-50
        flex items-center justify-between
        text-white font-medium
        " >
            <div className="flex gap-2 items-center" >
            <img src = {logo}  alt="Logo" className="h-17" /> 
            <span><strong className="text-pr-green text-2xl">BMP</strong> Portafolio de Software</span>
            </div>
            <ul className="flex gap-5">
                <li> <NavElement text="Proyectos"/> </li>
                <li> <NavElement text="Perfil"/> </li>
                <li> <NavElement text="Contacto"/> </li>
            </ul>
        </header>
    )

}