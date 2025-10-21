import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ChatBox  from "./ChatBox";


export default function ProCard(props) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);
    const summaryRef = useRef(null);
    const detailRef = useRef(null);
    const isInitialMount = useRef(true);


    useEffect(() => {

        if (isInitialMount.current) {
                    isInitialMount.current = false;
                    return;
                }

        const targetRef = mostrarDetalles ? detailRef : summaryRef;
        
        const timer = setTimeout(() => {
            if (targetRef.current) {
                targetRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }, 900);

        return () => clearTimeout(timer);
    }, [mostrarDetalles]);

    const handleToggleDetalles = (e) => {
        e.preventDefault(); 
        setMostrarDetalles(!mostrarDetalles);
    };

    const cardAnimation = {
        initial: { opacity: 0, scale: 0.9 }, 
        animate: { opacity: 1, scale: 1 },   
        exit: { opacity: 0, scale: 0.9 }, 
        transition: { duration: 0.8, ease: "easeInOut" } 
    };



    return (
        
        <AnimatePresence exitBeforeEnter>
        {
            !mostrarDetalles ? (
            <motion.div
                    key="summary" // Clave única para la vista simple
                    className="card"
                    id={props.id}
                    initial={cardAnimation.initial}
                    animate={cardAnimation.animate}
                    exit={cardAnimation.exit}
                    transition={cardAnimation.transition}
                >
                <img ref={summaryRef} src={props.imagenes.portada} alt="imagen de carrucel" loading="lazy"/>
                <div style={{ width: "90%" }}>
                    <h2>{props.nombre}</h2>
                    <p>{props.descripcion}</p>
                </div>
                {/* Este enlace activa la vista detallada */}
                <a className="detalles" onClick={handleToggleDetalles}>
                    Ver detalles
                </a>
            </motion.div>
        ) : (
            <motion.div
                key="details"
                className="cardDet"
                initial={cardAnimation.initial}
                animate={cardAnimation.animate}
                exit={cardAnimation.exit}
                transition={cardAnimation.transition}
            >
                <h3 className="tituloDetalle">{props.nombre}</h3>
                <div className="introduccion">
                    <div ref={detailRef} className="carrucel-container">
                        {/*<img ref = {detailRef} src={props.imagenes.portada} alt="Carrucel Ejemplo" /> */}
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
                            {props.imagenes.carrucel.map(item => (
                                <div key={item}>
                                    <img src={item} alt="imagen de carrucel"/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="tecnologiasArea">
                        <p>{props.descripcion}</p>
                        <h4 style={{ marginBottom: "5%" }}>Tecnologías usadas</h4>
                        <ul className="tecnologias">
                            {props.tecnologias.map(tech => <li key={tech}>{tech}</li>)}
                        </ul>
                        <a className="detalles ajuste" onClick={handleToggleDetalles}>
                            Ocultar detalles
                        </a>
                    </div>
                </div>
                <div className="caracteristicas">
                    <h4 className="tituloDetalle">Características del proyecto</h4>
                    {props.caracteristicas.map(item => (
                        <div key={item} className="caracteristica">
                            {item}
                        </div>
                    ))}
                </div>
                <div style={{width : "60%"}}>
                    {props.nombre === "Mini enigma" && <ChatBox />}
                </div>
            </motion.div>
        )
        }
    </AnimatePresence>
    );
}