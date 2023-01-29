import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { IBrand, IBrandData, ITableParams } from '@app/_models';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class BrandService {

    public user: IBrand | undefined;

    constructor(private httpClient: HttpClient) { }

    public getBrands(params: ITableParams): Observable<IBrandData> {
        return this.httpClient.get<IBrandData>(`${environment.apiUrl}/brands`).pipe(
            tap(x => console.log(x)),
            map(x => {
                x.data = x.data.slice((params.page - 1) * params.pageSise, params.page * params.pageSise)
                return x;
            })
        );
    }
}