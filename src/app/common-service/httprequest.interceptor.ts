// token-expiration.interceptor.ts

import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {
    constructor(private authService: AuthServiceService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        if (token && this.authService.isTokenExpired(token)) {
            // Token is expired, log the user out and redirect to login page
            this.authService.logout();
        }
        return next.handle(req);
    }
}
