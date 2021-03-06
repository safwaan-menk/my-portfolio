import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker-financial-data',
  templateUrl: './ticker-financial-data.component.html',
  styleUrls: ['./ticker-financial-data.component.scss']
})
export class TickerFinancialDataComponent implements OnInit {

  @Input() tickerFinancials: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tickerFinancials);
  }

}
