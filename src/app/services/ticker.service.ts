import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEXCloudAPI } from '../config/constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TickerService {
    constructor(
      private http: HttpClient,
      ) { }
// base data
    public getTickerData(ticker: string): Observable<Object> {
        return this.http.get(IEXCloudAPI.baseUrl + IEXCloudAPI.stock + ticker + '/quote?token=' + IEXCloudAPI.token);
    }

// revenue, pegRatio
    public getTickerAdvancedStatsData(ticker: string): Observable<Object>{
      return this.http.get(IEXCloudAPI.baseUrl + IEXCloudAPI.stock + ticker + '/advanced-stats?token=' + IEXCloudAPI.token);
    }

// cashflow, longTermDebt, totalDebt
    public getTickerFinancialData(ticker: string): Observable<Object>{
      return this.http.get(IEXCloudAPI.baseUrl + IEXCloudAPI.stock + ticker + '/financials?token=' + IEXCloudAPI.token);
    }
}