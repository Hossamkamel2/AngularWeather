import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  ToastrModule } from 'ngx-toastr';
import { AppErrorHandler } from './common/app-error-handler';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { httpInterceptorProviders } from './http-interceptors/index';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,

  ],
  providers: [{provide:ErrorHandler,useClass: AppErrorHandler},httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /**
   *
   */
  constructor() {


  }
}
