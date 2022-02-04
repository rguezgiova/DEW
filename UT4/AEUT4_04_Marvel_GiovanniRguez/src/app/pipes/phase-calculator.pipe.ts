import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phaseCalculator'
})
export class PhaseCalculatorPipe implements PipeTransform {

  /**
   * Pipe que calcula la Fase según el año de estreno de la película
   * @param age de la película
   */
  transform(age: string) {
    let tempArray = age.split("-");
    let ageParse = parseInt(tempArray[0]);
    if (ageParse >= 2008 && ageParse <= 2012) {
      return 'FASE 1 DEL UCM ('+ageParse+')';
    } else if (ageParse >= 2013 && ageParse <= 2015) {
      return 'FASE 2 DEL UCM ('+ageParse+')';
    } else {
      return 'FASE 3 DEL UCM ('+ageParse+')';
    }
  }
}
