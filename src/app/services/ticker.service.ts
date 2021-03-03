import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEXCloudAPI } from '../config/constants';
import { LogoAPI } from '../config/constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TickerService {
    constructor(
      private http: HttpClient,
      ) { }

    public getTickerData(ticker: string): Observable<Object> {
        return this.http.get(IEXCloudAPI.baseUrl + IEXCloudAPI.stock + ticker + '/quote?token=' + IEXCloudAPI.token);
    }

    public getDomainAndLogo(companyName: string): Observable<Object> {
      return this.http.get(LogoAPI.baseUrl + companyName);
  }
}