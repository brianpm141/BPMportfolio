import background from "../assets/background.jpg"
import ButonNav from "../Buttons/ButtonNav"

import portrait from "../assets/portrait.jpg"


export default function Intro(){
    return (
    <section className="
    flex items-center justify-center
    w-screen h-lvh" id = "home">
        {/** Background con capa negro enfrente 
        <div
        className="absolute inset-0 
        bg-cover bg-center bg-no-repeat blur-md z-0"
        style={{ backgroundImage: `url(${background})` }}/>
        <div className="absolute inset-0 bg-black/20"/>

        /** Contenido de la vista */}

        <div className="flex flex-row relative z-40 gap-25 py-30 px-40
       text-2xl items-center">
            <div
            className="flex flex-col gap-5">
                <small className="bg-surface-background p-2 w-fit
                rounded-2xl border border-secondary-green text-center
                text-sm font-semibold flex gap-2 items-center justify-center">
                    <div className="rounded-full bg-primary-green w-2.5 h-2.5
                    border border-primary-green"/>
                    Disponible Para Trabajar</small>
                <h1 className="text-6xl w-2/3" >Hola, mi nombre es <br/>
                <strong className="text-6xl bg-linear-to-r 
                from-primary-green to-text-main text-transparent bg-clip-text">Brayham Pavon Martell</strong></h1>
                <p className="">Soy un ingeniero en sistemas computacionales con enfoque 
                    la calidad del usuario y software de calidad sostenible en el
                    tiempo 
                </p>
                <aside className="flex gap-7">
                    <ButonNav href = "#projects">Proyectos</ButonNav>
                    <ButonNav href = "#Profile">Perfil</ButonNav>
                </aside>
            </div>
                {/** ----- Foto Mia ------- */}
            <img src={portrait} alt=""
            className="h-120 mask-radial-at-center 
            mask-radial-from-55%
            mask-radial-to-70%" />
        </div>
        

    </section>
    )
}