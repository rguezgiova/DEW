/**
 * Clase Film
 */
export class Film {
  id: number;
  age: number;
  name: string;
  image: string;
  synopsis: string;

  /**
   * Constructor de la clase Film
   */
  constructor() {
    this.id = 0;
    this.age = 0;
    this.name = "";
    this.image = "";
    this.synopsis = "";
  }
}
