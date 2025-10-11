import "../styles/proyectos.css"
import "../styles/web.css"
import ProCard from "./items/ProCard";

export default function Proyectos(props) {
    return (
        <section id = "proyectos">
        
        <h1 className="section-title">Mis proyectos</h1>

        <div className = "contenedor_cards">
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
        </div>
        </section>
    )
}