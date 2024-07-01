import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyConvertorService } from '../core/services/currency-convertor.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  providers:[CurrencyConvertorService]
})
export class FeatureModule { }
