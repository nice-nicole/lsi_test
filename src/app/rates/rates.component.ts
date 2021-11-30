import { Component, OnInit } from '@angular/core';
import { RatesService } from '../services/rates.service';
import { IRate } from './rate';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {


 
  public ratesss: IRate[] = [];  

  constructor(private _rateService: RatesService){}
  
  ngOnInit(){
    this._rateService.getRates()
    .subscribe(data =>{
      this.ratesss = data; 
      console.log("this.rates assigned to data:", this.ratesss)
      console.log(data)
    });

  }  


}
