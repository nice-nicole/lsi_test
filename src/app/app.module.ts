import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatesComponent } from './rates/rates.component';
import { RatesService } from './services/rates.service';

@NgModule({
  declarations: [
    AppComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
