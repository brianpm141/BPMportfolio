import background from "../assets/background.jpg"
import ButonNav from "../Buttons/ButtonNav"

import portrait from "../assets/portrait.jpg"


export default function Intro(){
    return (
    <section className="
    flex items-center justify-center
    w-screen h-lvh">
        {/** Background con capa negro enfrente */}
        <div
        className="absolute inset-0 
        bg-cover bg-center bg-no-repeat blur-md z-0"
        style={{ backgroundImage: `url(${background})` }}/>
        <div className="absolute inset-0 bg-black/20"/>
        
        {/** Contenido de la vista */}

        <div className="flex flex-row relative z-40 gap-25 p-30
        text-amber-50 text-2xl
        items-center">
            <div
            className="flex flex-col gap-5">
                <h1 className="text-4xl" >Hola, soy <strong className="text-4xl text-pr-green">Brayham Pavon Martell</strong></h1>
                <p className="">Soy un ingeniero en sistemas computacionales con enfoque 
                    la calidad del usuario y software de calidad sostenible en el
                    tiempo 
                </p>
                <aside className="flex gap-7">
                    <ButonNav 
                    text="Proyectos"/>
                    <ButonNav 
                    text="Sobre Mi"/>
                </aside>
            </div>
                {/** ----- Foto Mia ------- */}
            <img src={portrait} alt=""
            className="h-120 mask-radial-at-center 
            mask-radial-from-60%
            mask-radial-to-70%" />
        </div>
        

    </section>
    )
}