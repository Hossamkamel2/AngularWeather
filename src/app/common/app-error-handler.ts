import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    /**
     *
     */
    constructor() {
        

    }
    handleError(error){
        alert("An Unexpected Error Occured");
        console.log(error);
    }
}