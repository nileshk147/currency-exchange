import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../currency-service.service';
import { ICURRENCY_DATA, IEXCHANGE_RATE_RESPONSE } from '../currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  public currencyList : Array<ICURRENCY_DATA>= [];
  public exchangeRate = {} as IEXCHANGE_RATE_RESPONSE  ;
  public selectedCurrency: string = "";
  public responseErrorMessage: string = "";
  public isLoading: boolean = false;

  constructor(private currencyService: CurrencyServiceService) { 
    this.currencyService.loaderStatus.subscribe(isLoading=>{
        this.isLoading = isLoading;
    })
  }

  ngOnInit(): void {
    this.getCurrencyDropdown();
  }

  getCurrencyDropdown(){
    this.currencyService.loaderStatus.next(true);
    this.currencyService.getCurrencyDropdown().subscribe(
      res=>{
        this.currencyList = [...res.data];
        this.currencyService.loaderStatus.next(false);
      }, err=>{
        this.currencyService.loaderStatus.next(false);
        alert(err.message);
      })
  }

  baseCurrencyChanged(event: any){
    this.selectedCurrency = event.target.value;
    this.getLatestExhangeRates(this.selectedCurrency);
  }

  getLatestExhangeRates(baseCurrency: string){
    
    if(baseCurrency){
      this.currencyService.loaderStatus.next(true);
      this.currencyService.getExchangeRate(baseCurrency).subscribe(
        res=>{
          this.exchangeRate = {...res};
          this.currencyService.loaderStatus.next(false);
        }, err=>{
          this.currencyService.loaderStatus.next(false);
          this.responseErrorMessage = 'oops! We couldn\'t get the latest rates. Please try later.';
        }
      )
    }
  }


}
