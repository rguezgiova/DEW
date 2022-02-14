import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orbitalPeriod'
})
export class OrbitalPeriodPipe implements PipeTransform {

  transform(orbitalPeriod: string,) {
    let parsePeriod = parseInt(orbitalPeriod);
    let comparator = parsePeriod / 365;
    let parseString = String(comparator);
    return "(" + parseString + " años terrestres)";
  }
}
