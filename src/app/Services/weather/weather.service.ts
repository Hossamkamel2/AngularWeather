import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import {environment} from'src/environments/environment';

import { Observable,throwError } from 'rxjs';
import { AppError } from './../../common/app-error';
import { error } from 'protractor';
import { NotFoundError } from './../../common/not-found-error';
import { BadInput } from './../../common/bad-input-error';
import { UnAuthorizedError } from './../../common/UnAuthorized-error';
import { weatherRespnse } from './../../common/responseObject';
import { handleError } from './../../common/handleError';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getCurrentWeather(city:string){
    return this.http.get<weatherRespnse>(`${environment.apiUrl}`,{params:{q:city}})
    .pipe(catchError(handleError));
    
  }

  

}
