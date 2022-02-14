/**
 * Clase Planet con sus atributos
 */
export class Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;

  /**
   * Constructor de la clase Planet
   */
  constructor(name: string, rotation_period: string, orbital_period: string, climate: string, gravity: string, terrain: string, surface_water: string) {
    if (name == null) {
      this.name = "";
    } else {
      this.name = name;
    }
    if (rotation_period == null) {
      this.rotation_period = "";
    } else {
      this.rotation_period = rotation_period;
    }
    if (orbital_period == null) {
      this.orbital_period = "";
    } else {
      this.orbital_period = orbital_period;
    }
    if (climate == null) {
      this.climate = "";
    } else {
      this.climate = climate;
    }
    if (gravity == null) {
      this.gravity = "";
    } else {
      this.gravity = gravity;
    }
    if (terrain == null) {
      this.terrain = "";
    } else {
      this.terrain = terrain;
    }
    if (surface_water == null) {
      this.surface_water = "";
    } else {
      this.surface_water = surface_water;
    }
  }
}
