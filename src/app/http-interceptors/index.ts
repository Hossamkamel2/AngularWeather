import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiKeyinterceptor } from './api-Key-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiKeyinterceptor, multi: true },
];