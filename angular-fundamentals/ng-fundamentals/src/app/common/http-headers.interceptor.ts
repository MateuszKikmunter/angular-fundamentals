import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let applicationJson = "application/json";
        let contentType = "Content-Type";
        if(!req.headers.has(contentType)){
            req = req.clone({ headers: req.headers.set(contentType, applicationJson) });
        }

        req = req.clone({ headers: req.headers.set('Accept', applicationJson) });
        return next.handle(req);
    }
}