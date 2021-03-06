import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TickerService } from '../services/ticker.service'


@Component({
  selector: 'app-ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.scss']
})
export class TickerSearchComponent implements OnInit {
  @Output() tickerDetailsEvent = new EventEmitter<any>();
  @Output() tickerFinancialsEvent = new EventEmitter<any>();
  
  // TODO: update when i figure out how to customize
  availableFinancialData:any = [];



  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
  }

  getTickerData(ticker: string) {
    this.tickerService.getTickerData(ticker).subscribe((response: any) => {
      this.tickerDetailsEvent.emit(response);
    });
    this.tickerService.getTickerAdvancedStatsData(ticker).subscribe((response: any) => {
      this.availableFinancialData.push(response.revenue ? response.revenue : 0);
      this.availableFinancialData.push(response.pegRatio ? response.pegRatio : 0);
      this.availableFinancialData.push(response.totalCash ? response.totalCash : 0);
    });
    this.tickerService.getTickerFinancialData(ticker).subscribe((response: any) => {
      this.availableFinancialData.push(response.financials[0].cashFlow ? response.financials[0].cashFlow : 0);
      this.availableFinancialData.push(response.financials[0].longTermDebt ? response.financials[0].longTermDebt : 0);
      this.availableFinancialData.push(response.financials[0].totalDebt ? response.financials[0].totalDebt : 0);

    });
    this.tickerFinancialsEvent.emit(this.availableFinancialData);
  }

}
