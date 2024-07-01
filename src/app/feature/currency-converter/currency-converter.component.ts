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

  }
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();

  }

}
