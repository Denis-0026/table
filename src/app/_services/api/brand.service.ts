import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { IBrand, IBrandData, ITableParams } from '@app/_models';
import { environment } from '@environments/environment';
import { Filter } from '@app/_helpers';

@Injectable({ providedIn: 'root' })
export class BrandService extends Filter<IBrand> {

    constructor(private httpClient: HttpClient) {
        super();
    }

    public getBrands(params: ITableParams): Observable<IBrandData> {
        return this.httpClient.get<IBrandData>(`${environment.apiUrl}/brands`).pipe(
            map(x => {
                let a = this.filterData(x.data, params);
                x.data = a[0];
                x.length = a[1];
                return x;
            })
        );
    }
}