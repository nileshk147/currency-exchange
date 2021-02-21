import { Component, Input, OnInit } from '@angular/core';
import { IEXCHANGE_RATE_RESPONSE } from '../currency.model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  @Input() selectedCurrency : string = '';
  @Input() responseErrorMessage : string = '';
  @Input() exchangeRate = {} as IEXCHANGE_RATE_RESPONSE  ;
  constructor() { 
  } 

  ngOnInit(): void {
  }

}
