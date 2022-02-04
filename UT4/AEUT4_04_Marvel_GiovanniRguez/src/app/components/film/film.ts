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
    if (id == null || id < 0) {
      this.id = 0;
    } else {
      this.id = id;
    }
    if (name == null) {
      this.name = "";
    } else {
      this.name = name;
    }
    if (image == null) {
      this.image = "";
    } else {
      this.image = image;
    }
    if (age == null) {
      this.age = "";
    } else {
      this.age = age;
    }
    if (synopsis == null) {
      this.synopsis = "";
    } else {
      this.synopsis = synopsis;
    }
  }
}
