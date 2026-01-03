
import ButonNav from "../Buttons/ButtonNav"

import portrait from "../assets/portrait.jpg"


export default function Intro() {
    return (
        <section className="
    flex items-center justify-center
    w-full min-h-screen overflow-x-hidden" id="home">
            {/** Background con capa negro enfrente 
        <div
        className="absolute inset-0 
        bg-cover bg-center bg-no-repeat blur-md z-0"
        style={{ backgroundImage: `url(${background})` }}/>
        <div className="absolute inset-0 bg-black/20"/>

        /** Contenido de la vista */}

            <div className="flex flex-col md:flex-row relative z-40 gap-10 md:gap-25 py-10 md:py-30 px-5 md:px-40
       text-2xl items-center w-full">
                <div
                    className="flex flex-col gap-5 w-full md:w-auto">

                    {/* Mobile: Header + Image Row */}
                    <div className="flex flex-row items-center justify-between md:block">
                        <div className="w-3/5 md:w-full">
                            <small className="bg-surface-background p-2 w-fit
                            rounded-2xl border border-secondary-green text-center
                            text-sm font-semibold flex gap-2 items-center justify-center mb-5 md:mb-0">
                                <div className="rounded-full bg-primary-green w-2.5 h-2.5
                                border border-primary-green"/>
                                Disponible para trabajar</small>
                            <h1 className="text-3xl md:text-6xl w-full md:w-2/3" >Hola, mi nombre es <br />
                                <strong className="text-3xl md:text-6xl bg-linear-to-r 
                            from-primary-green to-text-main text-transparent bg-clip-text">Brayham Pavon Martell</strong></h1>
                        </div>

                        {/* Mobile Image */}
                        <img src={portrait} alt="Portrait Mobile"
                            className="w-2/5 md:hidden rounded-full aspect-square object-cover ml-2" />
                    </div>

                    <p className="text-lg md:text-2xl mt-5 md:mt-0">Soy un Ingeniero en Sistemas con pasión por crear
                        productos y herramientas de calidad, sostenible en el timpo y
                        con impacto en las personas.
                    </p>
                    <aside className="flex gap-7">
                        <ButonNav href="#projects">Proyectos</ButonNav>
                        <ButonNav href="#Profile">Perfil</ButonNav>
                    </aside>
                </div>
                {/** ----- Foto Mia desktop ------- */}
                <img src={portrait} alt="Portrait Desktop"
                    className="hidden md:block h-auto md:w-auto md:h-120 
            rounded-full md:rounded-none md:mask-radial-at-center 
            md:mask-radial-from-60%
            md:mask-radial-to-70% object-cover object-top" />
            </div>


        </section>
    )
}