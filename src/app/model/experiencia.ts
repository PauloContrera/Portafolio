export class Experiencia {
    id? : number;
    nombre: string; 
    lugar: string;
    desde: string; 
    hasta: string;
    texto: string; 
    img: {
        src: string;
        alt: string;
    }

    constructor(nombre: string, lugar: string, desde: string, hasta: string, texto: string, img: { src: string, alt: string }){
        this.nombre = nombre;
        this.lugar= lugar;
        this.desde = desde;
        this.hasta = hasta;
        this.texto = texto;
        this.img = img;
    }
}

