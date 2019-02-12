import { Pipe, PipeTransform } from '@angular/core';
import {Rates} from './rates';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  rates: object;
  rateArray: Array<string>;
  index: number;
  selected: number;
  constructor() {
    this.rateArray = [];
    this.index = 0;
    this.selected = 0;
  }

  transform(value: any, args?: any): any {
    // Get rates Object from rates.ts
    this.rates = new Rates().rates;
    // Get all the keys i.e the currency names
    this.rateArray = Object.keys(this.rates);
    // Search the index of the selected currency name in array
    this.index = this.rateArray.indexOf(args);
    // Get the value of the selected currency i.e rate of selected currency from the object
    this.selected = this.rates[Object.keys(this.rates)[this.index]];

    for (const i in this.rates) {
      if (this.rates.hasOwnProperty(i)) {
        // Apply the formula ( Rate of (currency in which we need to convert) / Rate of selected currency ) * number of units
        this.rates[i] = ((this.rates[i] / this.selected) * value).toFixed(2);
      }

    }
    return this.rates;
  }

}
