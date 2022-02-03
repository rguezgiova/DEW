/**
 * Clase Film
 */
export class Film {
  id: number;
  name: string;
  image: string;
  age: string;
  synopsis: string;

  /**
   * Constructor de la clase Film
   */
  constructor(id: number, name: string, image: string, age: string, synopsis: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.age = age;
    this.synopsis = synopsis;
  }
}
