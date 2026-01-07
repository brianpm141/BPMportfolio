export default function Contact() {
    return (
        <footer id="Contacto" className="w-full min-h-fit flex flex-col
        bg-dark-background rounded-t-4xl px-5 md:px-20 pt-10 justify-evenly
        text-text-dark gap-10 md:gap-0 pb-10">
            <h2 className="text-3xl font-medium">
                Contacta conmigo!</h2>
            <div className="flex flex-col md:flex-row justify-between px-5 md:px-15 gap-10">
                <div className="w-full">
                    <p className="w-full md:w-3/5 text-lg md:text-2xl text-text-dark
                    transition-all duration-300 ease-in-out
                    hover:scale-103">
                        Escríbeme y me pondré en contacto contigo
                        lo más pronto posible.
                    </p>
                </div>
                <div className="text-2xl w-full md:w-auto
                    transition-all duration-300 ease-in-out
                    hover:scale-105">
                    <p className="text-primary-green">¡Aquí tienes mi correo!</p>
                    <a href="mailto:bpavonmartell@hotmail.com" >bpavonmartell@hotmail.com</a>
                </div>
            </div>

            <div className="w-full border border-text-main self-center my-5" />

            <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center md:justify-end items-center px-5 md:px-15">
                <h5>Te dejo mis redes aquí</h5>
                <ul className="flex flex-row gap-5">
                    <li><a href="https://www.linkedin.com/in/bpmartell/"
                        target="_blank" className="flex
                    transition-all duration-300 ease-in-out
                    hover:scale-115" >
                        <img className="h-10"
                            src="https://www.svgrepo.com/show/157006/linkedin.svg"
                            alt="Linkedin" loading="lazy" />
                    </a>
                    </li>
                    <li>
                        <a href="https://github.com/brianpm141"
                            target="_blank" className="flex
                    transition-all duration-300 ease-in-out
                    hover:scale-130">
                            <img className="h-10"
                                src="https://www.svgrepo.com/show/475654/github-color.svg" alt="Github" loading="lazy" /></a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}