import "../styles/contacto.css"

export default function Contacto(){
    return(
        <section id = "contacto">

        <h2>Si quieres contactarme</h2>
        
            <footer className = "info_card">

                <a href="https://www.linkedin.com/in/bpmartell"
                target="_blank"><p><img src="img/icons/linkedin.png" alt="Icono linkedin" loading="lazy"/> Linkedin: Brayham Pavon Martell</p></a>
                <a href="https://github.com/brianpm141" 
                target="_blank"><p><img src="img/icons/github.png" alt="Icono github" loading="lazy"/> Github: brianpm141</p></a>
                <a href="mailto:bpavonmartell@hotmail.com"><p><img src="img/icons/mail.png" alt="Icono correo" loading="lazy"/> Correo electrónico: bpavonmartell@hotmail.com</p></a>
            </footer>
        </section>
    )
}