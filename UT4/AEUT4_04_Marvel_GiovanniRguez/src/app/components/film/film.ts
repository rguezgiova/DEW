/**
 * Clase Film
 */
export class Film {
  id: number;
  name: string;
  image: string;
  age: number;
  synopsis: string;

  /**
   * Constructor de la clase Film
   */
  constructor() {
    this.id = 0;
    this.name = "";
    this.image = "";
    this.age = 0;
    this.synopsis = "";
  }
}
