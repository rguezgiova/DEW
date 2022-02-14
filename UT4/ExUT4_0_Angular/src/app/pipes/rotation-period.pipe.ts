import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rotationPeriod'
})
export class RotationPeriodPipe implements PipeTransform {

  transform(rotationPeriod: string,) {
    let parsePeriod = parseInt(rotationPeriod);
    let comparator = parsePeriod / 24;
    let parseString = String(comparator);
    return "(" + parseString + " días terrestres)";
  }
}
