export class Idea {

  name;
  genero;
  resumen;
  votos;
  autor;
  constructor(name, genero, resumen,autor,votos) {
    this.name = name;
    this.genero = genero;
    this.resumen = resumen;
    this.votos = votos;
    this.autor = autor;
  }
}

export const  IDEAS = [
  {name: 'Matar Orcos' , genero: 'Ciencia-Ficcion', resumen: 'Matar muchos orcos ', votos: 4, autor:'' },
  {name: 'Criar Dinosaorios' , genero: 'comedia', resumen: 'Crias muchos Dinosaorios ', votos: 9, autor:'' },
  {name: 'Criar hojas' , genero: 'romantica', resumen: 'Crias muchos hojas ', votos: 7, autor:'' },
  {name: 'Criar ramas' , genero: 'terror', resumen: 'Crias muchos ramas ', votos: 2, autor:'' },



];
