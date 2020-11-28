import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class ApiKeyinterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const apiKey=environment.apiKey;
    const request=req.clone({headers:req.headers.set('x-rapidapi-key',apiKey)})
        return next.handle(request);
  }
}