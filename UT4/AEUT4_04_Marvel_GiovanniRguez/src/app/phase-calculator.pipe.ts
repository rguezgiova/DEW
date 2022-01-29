import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phaseCalculator'
})
export class PhaseCalculatorPipe implements PipeTransform {

  /**
   * Pipe que calcula la Fase según el año de estreno de la película
   * @param age de la película
   */
  transform(age: number) {
    if (age >= 2008 && age <= 2012) {
      return 'FASE 1 DEL UCM';
    } else if (age >= 2013 && age <= 2015) {
      return 'FASE 2 DEL UCM';
    } else {
      return 'FASE 3 DEL UCM';
    }
  }
}
