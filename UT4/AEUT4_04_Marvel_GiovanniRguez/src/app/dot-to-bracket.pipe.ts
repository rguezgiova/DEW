import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToBracket'
})
export class DotToBracketPipe implements PipeTransform {

  /**
   * Pipe que transforma el nombre de una película según si tiene o no :
   * @param name de la película
   */
  transform(name: string) {
    let tempArray = name.split(': ');
    if (tempArray[1] != null) {
      return tempArray[0] + "(" + tempArray[1] + ")";
    } else {
      return name;
    }
  }
}
