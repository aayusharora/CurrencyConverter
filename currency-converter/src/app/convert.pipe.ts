import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value / 70.64;
  }

}
