import "../styles/contacto.css"
import "../styles/web.css"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin.png"
import mail from "../assets/icons/mail.png"

export default function Contacto(){
    return(
        <section id = "contacto">        
            <footer className = "info_card">

                <div className="contacto_intro">
                    <h3>Pongamonos en contacto!</h3>
                    <p>Estoy abierto a oportunidades laborales y colaboraciones en proyectos interesantes. 
                    Si tienes alguna propuesta 
                    o simplemente quieres saludar, no dudes en contactarme.
                    ¡Espero con interés conectar contigo!</p>
                </div>
                
                <a className="tags" href="https://www.linkedin.com/in/bpmartell"
                target="_blank"><p><img src={linkedin} alt="Icono linkedin" loading="lazy"/> Linkedin: Brayham Pavon Martell</p></a>
                <a className="tags" href="https://github.com/brianpm141"
                target="_blank"><p><img src={github} alt="Icono github" loading="lazy"/> Github: brianpm141</p></a>
                <a className="tags" href="mailto:bpavonmartell@hotmail.com"><p><img src={mail} alt="Icono correo" loading="lazy"/> Correo electrónico: bpavonmartell@hotmail.com</p></a>
            </footer>
        </section>
    )
}