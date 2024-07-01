import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConvertorService {

  currencyJsonAPI:string =`${env.currencyAPI.endpoint}`;
  convertCurrencyAPI:string=`${env.convertAPI.endpoint}`;
  name='Vishnu Hari';

  constructor(private http:HttpClient) { }


  convertCurrencyJson(value:number, from:string, to:string): Observable<any>{
    const headers = new HttpHeaders({
      // 'Authorization': 'Vishnu_Hari'
      'Authorization': 'a0022626ecca4354883999dd6bf9e510'
    });
    return this.http.get(this.convertCurrencyAPI + `/` + value + '/' + from + '/' + to + `?app_id=56236e92068f40d9baf2fdfc15f3af2c`, { headers });
  }

  getCurrencyJson(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'a0022626ecca4354883999dd6bf9e510'
    });

    return this.http.get(this.currencyJsonAPI, { headers });
  }

}
