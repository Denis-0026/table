import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { ITableParams, IUser, IUserData } from '@app/_models';
import { Filter } from '@app/_helpers';

@Injectable({ providedIn: 'root' })
export class UserService extends Filter<IUser> {

    constructor(private httpClient: HttpClient) {
        super();
    }

    public getUsers(params: ITableParams): Observable<IUserData> {
        return this.httpClient.get<IUserData>(`${environment.apiUrl}/users`).pipe(
            map(x => {
                x.data = this.filterData(x.data, params);
                return x;
            })
        );
    }
}