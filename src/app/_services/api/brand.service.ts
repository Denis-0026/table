import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { IBrand, IBrandData } from '@app/_models';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class BrandService {

    public user: IBrand | undefined;

    constructor(private httpClient: HttpClient) { }

    public getBrands(page: number = 3, limit: number = 2): Observable<IBrandData> {
        return this.httpClient.get<IBrandData>(`${environment.apiUrl}/brands`).pipe(
            tap(x => console.log(x)),
            map(x => {
                x.data = x.data.slice((page - 1) * limit, page * limit)
                return x;
            })
        );
    }
}