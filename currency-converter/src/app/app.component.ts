import { ConverterPipe } from './converter.pipe';
import { Component } from '@angular/core';
import {Rates} from './rates';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConverterPipe]
})
export class AppComponent {
  title = 'currency-converter';
  currentVal: number;
  buttons: Array<string>;
  unit: string;
  value = 500;
  currencyVal: Object;
  constructor(private converterpipe: ConverterPipe) {
   this.currentVal = 1;
   this.unit = 'USD';
   this.buttons = Object.keys(new Rates().rates);
   this.currencyVal = {};
  }

  convert(val, unit) {
     this.currencyVal = this.converterpipe.transform(val, unit);
  }

  getKeys() {
    return Object.keys(this.currencyVal);
  }
}
