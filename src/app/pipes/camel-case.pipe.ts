import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    console.log(values)
    let result = '';

    for(let v of values) {
      result += this.calitalize(v) + ' ';
    }

    return result;
  }

  calitalize(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
  }

}
