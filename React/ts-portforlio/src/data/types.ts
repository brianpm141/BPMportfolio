export interface ImagenesProyecto {
    portada:string
    carrucel: string[]
}

export interface Proyecto{
    id: number
    nombre: string
    descripcion: string
    imagenes: ImagenesProyecto
    tecnologias: string[]
    caracteristicas: string[]
    repositorio: string
}