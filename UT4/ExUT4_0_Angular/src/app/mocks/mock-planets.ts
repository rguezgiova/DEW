import { Planet } from "../components/planet/planet";

/**
 * Mock con lista de los Planetas y sus características
 */
export const PLANETS: Planet[] = [
  {id: 1, name: 'Tatooine', rotation_period: '23', orbital_period: '304', climate: 'arid', gravity: '1 standart', terrain: 'desert', surface_water: '1'},
  {id: 2, name: 'Alderaan', rotation_period: '24', orbital_period: '364', climate: 'temparate', gravity: '1 standart', terrain: 'grasslands', surface_water: '40'},
  {id: 3, name: 'Yavin IV', rotation_period: '24', orbital_period: '4818', climate: 'temperate', gravity: '1 standart', terrain: 'jungle', surface_water: '8'},
  {id: 4, name: 'Hoth', rotation_period: '23', orbital_period: '549', climate: 'frozen', gravity: '1.1 standart', terrain: 'tundra', surface_water: '100'},
];
