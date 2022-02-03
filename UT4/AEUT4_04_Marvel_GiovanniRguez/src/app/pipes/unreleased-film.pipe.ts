import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unreleasedFilm'
})
export class UnreleasedFilmPipe implements PipeTransform {

  /**
   * Pipe que compara si una película tiene algun campo en null
   * @param param parámetro a comparar
   */
  transform(param: string) {
    if (param == null) {
      // @ts-ignore
      return document.getElementById('card').style.display = 'none';
    } else {
      // @ts-ignore
      return document.getElementById('card').style.display = 'flex';
    }
  }
}
