import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NotFoundError } from './not-found-error';
import { BadInput } from './bad-input-error';
import { UnAuthorizedError } from './UnAuthorized-error';
import { AppError } from './app-error';


export function handleError(error:HttpErrorResponse){
    if(error.status===404)
     return throwError(new NotFoundError());
 
     else if(error.status===400)
     return throwError(new BadInput(error.message));
 
     else if(error.status===401)
     return throwError(new UnAuthorizedError());
 
 
     return throwError(new AppError(error));
   }