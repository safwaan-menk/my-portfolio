import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TickerService } from '../services/ticker.service'


@Component({
  selector: 'app-ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.scss']
})
export class TickerSearchComponent implements OnInit {
  @Output() tickerDetailsEvent = new EventEmitter<any>();
  @Output() companyDomainAndLogoEvent = new EventEmitter<any>();


  responseObject = {};

  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
  }

  getTickerData(ticker: string) {
    this.tickerService.getTickerData(ticker).subscribe((response: any) => {
      this.tickerService.getDomainAndLogo(response.companyName.split(" ")[0]).subscribe((response: any) => {
        this.companyDomainAndLogoEvent.emit(response);
      })
      this.tickerDetailsEvent.emit(response)
    })
  }

}
