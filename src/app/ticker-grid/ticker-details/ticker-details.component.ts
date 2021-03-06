import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker-details',
  templateUrl: './ticker-details.component.html',
  styleUrls: ['./ticker-details.component.scss']
})
export class TickerDetailsComponent implements OnInit {

  @Input() tickerData: any;
  @Input() tickerFinancials: any;
  constructor() { }


  ngOnInit(): void {
  }

}
