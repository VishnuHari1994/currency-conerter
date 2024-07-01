import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
},
{
  path: '',
  component: CurrencyConverterComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
