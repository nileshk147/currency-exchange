import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyModuleRoutingModule } from './currency-module-routing.module';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [CurrencyListComponent, ExchangeRateComponent, LoaderComponent],
  imports: [
    CommonModule,
    CurrencyModuleRoutingModule
  ]
})
export class CurrencyModuleModule { }
