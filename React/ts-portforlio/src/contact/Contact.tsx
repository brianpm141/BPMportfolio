export default function Contact() {
    return (
        <footer id="Contacto" className="w-screen h-1/3 flex flex-col
        bg-dark-background rounded-t-4xl px-20 pt-10 justify-evenly
        text-text-dark">
            <h2 className="text-3xl font-medium">
                Contacta conmigo!</h2>
            <div className="flex flex-row justify-between px-15">
                <div>
                    <p className="w-2/5 text-2xl text-text-dark
                    transition-all duration-300 ease-in-out
                    hover:scale-103">
                        Escríbeme y me pondré en contacto contigo
                        lo más pronto posible.
                    </p>
                </div>
                <div className="text-2xl
                    transition-all duration-300 ease-in-out
                    hover:scale-105">
                    <h5 className="text-primary-green">¡Aquí tienes mi correo!</h5>
                    <a href="mailto:bpavonmartell@hotmail.com" >bpavonmartell@hotmail.com</a>
                </div>
            </div>

            <div className="w-1/1 border border-text-main self-center" />

            <div className="flex gap-10 justify-end items-center px-15">
                <h5>Te dejo mis redes aquí</h5>
                <ul className="flex flex-row gap-5">
                    <li><a href="https://www.linkedin.com/in/bpmartell/"
                        target="_blank" className="flex
                    transition-all duration-300 ease-in-out
                    hover:scale-115">
                        <img className="h-10"
                            src="https://www.svgrepo.com/show/157006/linkedin.svg"
                            alt="Linkedin" />
                    </a>
                    </li>
                    <li>
                        <a href="https://github.com/brianpm141"
                            target="_blank" className="flex
                    transition-all duration-300 ease-in-out
                    hover:scale-130">
                            <img className="h-10"
                                src="https://www.svgrepo.com/show/475654/github-color.svg" alt="Github" /></a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}