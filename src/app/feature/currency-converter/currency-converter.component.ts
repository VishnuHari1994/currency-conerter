import { Component } from '@angular/core';
import { CurrencyConvertorService } from '../../core/services/currency-convertor.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  standalone: false,
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {

  public ngUnsubscribe$= new Subject<void>();

  constructor(
    public CurrencyConvertor: CurrencyConvertorService
  ){}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.CurrencyConvertor.
    getCurrencyJson().pipe(takeUntil(this.ngUnsubscribe$)).
    subscribe((response)=>{
      console.log(response)
    });

    this.CurrencyConvertor.
    convertCurrencyJson(19999.95,'GBP','EUR').pipe(takeUntil(this.ngUnsubscribe$)).
    subscribe((response)=>{
      console.log(response)
    });


    // https://openexchangerates.org/api/convert/19999.95/GBP/EUR?app_id=YOUR_APP_ID
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();

  }

}
