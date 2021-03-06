import { Component, Input, OnInit } from '@angular/core';
import { TickerService } from '../services/ticker.service'



@Component({
  selector: 'app-ticker-grid',
  templateUrl: './ticker-grid.component.html',
  styleUrls: ['./ticker-grid.component.scss']
})
export class TickerGridComponent implements OnInit {
   @Input() tickerData: any;
   @Input() tickerFinancials: any;


   
  constructor(private tickerService: TickerService) { }


  ngOnInit(): void {
  }

}
