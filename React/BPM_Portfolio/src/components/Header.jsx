import mylogo from "../assets/logo.png";

export default function Header() {

    return(
    <header className="top_bar">
        <div>
            <a className = "titulo" href="#titulo">
            <img id="icono" src= {mylogo} alt="BPM Software"/>
            <strong> BPM </strong> <span> Software </span>
            </a>
        </div>
        <nav className = "nav_links">
            <a href="#proyectos">Proyectos</a>
            <a href="#sobremi">Perfil</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>
    )
}
