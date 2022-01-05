import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoinDeskService {

  constructor(private http: HttpClient) { }

  getPrices(){
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}
