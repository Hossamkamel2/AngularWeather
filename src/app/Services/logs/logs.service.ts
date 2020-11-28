import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherRespnse } from './../../common/responseObject';
import { environment } from './../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { handleError } from './../../common/handleError';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http:HttpClient) { }

  AddRead(log:weatherRespnse){
    return this.http.post<weatherRespnse>(`${environment.appUrl}`,log)
    .pipe(catchError(handleError));
    
  }
}
