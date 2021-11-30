import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRate } from '../rates/rate';

@Injectable()
export class RatesService {
  private _url: string = `https://api.nbp.pl/api/exchangerates/tables/A/?format=json`

  constructor(private http: HttpClient) { }
  
  getRates(): Observable<IRate[]>{
    return this.http.get<IRate[]>(this._url);
  }
}
