import { useState } from "react"

export default function EnigmaCard(){

    const [mensaje , setMensaje] = useState("")
    const [mensajeEnc , setMensajeEnc] = useState("")
    const [mensajeFin, setMensajeFin] = useState("")
    const [errorMes , setErrorMes] = useState("")
    const [pass , setPass] = useState("")

    const crypt = async () => {
        if ( mensaje.length === 0 ){
            setErrorMes("Ingrese el mensaje a encriptar")
            return
        }
        if (pass.length < 16){
            setErrorMes("Ingrese una contraseña valida")
            return
        }
        
        const DatosMensaje = {
            message: mensaje,
            password : pass
        }

        try {
            const response = await fetch('https://mini-enigma.vercel.app/minienigma/encrypt',
            {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json", 
                },
                body: JSON.stringify(DatosMensaje)
            });
            if (!response.ok){
                throw new Error("Algo salio mal")
            }

            const data = await response.json()
            setMensajeEnc(data.result)
        }catch(error){
            setErrorMes("Algo salio mal, intenta de nuevo...")
        }finally{
            setErrorMes("")
        }
    }

    const decrypt = async () => {
        if ( mensajeEnc.length === 0 ){
            setErrorMes("Ingresa un mensaje a desencriptar")
            return
        }
        if (pass.length < 16){
            setErrorMes("Ingresa una contraseña valida")
            return
        }

        const DatosMensaje ={
            message: mensajeEnc,
            password: pass
        }

        try {
            const response = await fetch('https://mini-enigma.vercel.app/minienigma/decrypt',
                {
                    method:'post',
                    headers: {
                        'Content-Type': "application/json", 
                    },
                    body: JSON.stringify(DatosMensaje)
                }
            )

            if(!response.ok){
                throw new Error("Algo salio mal")
            }

            const data = await response.json()
            setMensajeFin(data.result)

        } catch (error) {
            setErrorMes("Algo salio mal, intenta de nuevo...")
        }
        finally{
            setErrorMes("")
        }
    }


    return(
        <article className="bg-surface-background col-span-3
        flex flex-col justify-evenly
        rounded-4xl p-8 gap-5 h-auto
        transition-all duration-300 ease-in-out
        hover:scale-101 ">
            <h3 className="text-3xl font-semibold">
                Sistema de encriptacion de mensajes Mini Enigma
            </h3>
            <p>Inspirado en la legendaria máquina Enigma de la Segunda Guerra Mundial, 
                este sistema implementa un algoritmo básico de cifrado dinámico. 
                Tu contraseña actúa como la 'llave de configuración', modificando el mapeo del alfabeto para cada carácter.
                Esto transforma tu texto en un código ilegible que solo puede ser revelado utilizando la credencial exacta.</p>
            <a href="https://github.com/brianpm141/MiniEnigma.git" target="_blank" 
            className="bg-secondary-green w-full text-center py-3 mt-4 self-center
                    rounded-2xl text-text-dark justify-center
                    transition-all duration-300 ease-in-out
                    hover:scale-102 h-12">Ver Repositorio</a>

            
            <div className="grid grid-cols-3 gap-10 w-full justify-evenly p-5">
                <div className="flex flex-col">
                    <h4 className="text-2xl">Mensaje Inicial</h4>
                    <label htmlFor=""
                    className="text-text-body mb-1 italic">Mensaje</label>
                    <textarea name="mensaje" id="mensaje"
                    className="resize-none bg-primary-background 
                    border border-border-ligth
                    rounded-2xl p-3 h-full text-xl"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    maxLength={180}
                    placeholder="Aqui va tu mensaje a encriptar...."
                    ></textarea>
                    <a onClick={crypt} className="bg-secondary-green w-full text-center py-3 mt-4 self-center
                    rounded-2xl text-text-dark
                    transition-all duration-300 ease-in-out
                    hover:scale-103 min-h-12"
                    >Encriptar Mensaje</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-2xl">Seguridad</h4>
                    <label htmlFor="" className="text-text-body mb-1 italic">Contraseña</label>
                    <input className="h-12 p-3 bg-primary-background 
                    border border-border-ligth
                    rounded-2xl"
                    type="text"
                    maxLength={64}
                    placeholder="Introduce tu contraseña de minimo 16 caracteres."
                    value={pass}
                    onChange={(e) => {setPass(e.target.value)}}/>
                    {errorMes && <p className="bg-red-600 py-2 px-5 rounded-2xl w-fit mt-3 text-white self-center
                    border font-semibold">
                        {errorMes}
                        </p>
}
                    <h4 className="text-2xl my-3">Mensaje Encriptado</h4>
                    <textarea name="" id="" 
                    className="resize-none bg-primary-background 
                    border border-border-ligth
                    rounded-2xl p-3 h-25 text-sm text-text-body"
                    value={mensajeEnc}
                    placeholder="Aqui estara el mensaje encriptado, si lo modificas el mensaje sera diferente..."
                    onChange={(e) => setMensajeEnc(e.target.value)}></textarea>
                    <a onClick={decrypt} className="bg-secondary-green w-full text-center py-3 mt-4 self-center
                    rounded-2xl text-text-dark justify-center
                    transition-all duration-300 ease-in-out
                    hover:scale-103 h-12">Desencriptar Mensaje</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-2xl mb-5" >Traduccion</h4>
                    <textarea name="" id="" className="resize-none bg-primary-background 
                    border border-border-ligth
                    rounded-2xl p-3 h-full text-xl"
                    value={mensajeFin}
                    disabled
                    placeholder="Aqui estara el mensaje desencriptado..."
                    ></textarea>
                </div>
            </div>

        </article>
    )
}