export class Acercade {
    id?: number;
  nombre: string;
  texto: string;
  texto2: string;
  texto3: string;
  img: string;

  constructor(nombre: string, texto: string, texto2: string, texto3: string, img: string){
    this.nombre = nombre;
    this.texto = texto;
    this.texto2 = texto2;
    this.texto3 = texto3;
    this.img = img;
  }
}
