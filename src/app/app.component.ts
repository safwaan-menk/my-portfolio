import { Component, Input } from '@angular/core';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickerData: any;
  companyDomainAndLogo: any;
  title = 'My Portfolio';

  getTickerData(tickerData: any){
    this.tickerData = tickerData;
  }
  getCompanyDomainAndLogo(companyDomainAndLogo: any) {
    this.companyDomainAndLogo = companyDomainAndLogo;
  }
}
