import iconMain from "../assets/iconMain.png"

export default function Header() {
    return (
        <header className="flex justify-between p-3 w-full h-15 bg-amber-100 items-center">
            <a className="flex gap-5 items-center">
                <img src={iconMain} alt="imagen de logo" className="h-12" />
                <span className="items-center text-sm"><strong className="text-green-700 font-bold text-2xl">BPM</strong> Portafolio de Software</span></a>

            <nav>
                <ul className="flex gap-5">
                    <li>Proyectos</li>
                    <li>Sobre Mi</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}