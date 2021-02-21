import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICURRENCY_API_RESPONSE, IEXCHANGE_RATE_RESPONSE } from './currency.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) { }

  getCurrencyDropdown(){
    return this.http.get<ICURRENCY_API_RESPONSE>(`${environment.apiURL}/currency/get_currency`);
  }

  getExchangeRate(baseCurrency: string){
    const baseUrl = `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`;
    return this.http.get<IEXCHANGE_RATE_RESPONSE>(baseUrl);
  }
}
