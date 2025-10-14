import "../styles/proyectos.css"
import "../styles/web.css"
import ProCard from "./items/ProCard";
import proyectos from "../datos/proyectos.json"

const cards = proyectos.map(proyecto => (
    <ProCard
    {...proyecto}
    />
))

export default function Proyectos() {

    return (
        <section id = "proyectos">
        <h1 className="section-title">Mis proyectos</h1>
        <div className = "contenedor_cards">
            {cards}
        </div>
        </section>
    )
}