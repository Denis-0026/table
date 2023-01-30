import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import BrandsJson from '../../assets/data/brands.json';
import { IBrand, IBrandData } from '@app/_models';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method } = request;
        let _data = null;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/brands') && method === 'GET':
                    return getBrands();
                default:
                    return next.handle(request);
            }
        }

        function getBrands(): Observable<HttpResponse<IBrandData>> {
            _data = BrandsJson as unknown as Array<IBrand>;
            let response: IBrandData = { data: _data, length: _data.length };
            _data = null;
            return ok(response);
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }));
        }
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};