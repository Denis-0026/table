import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { ITableParams } from '@app/_models';
import { IUserData } from '@app/_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public getUsers(params: ITableParams): Observable<IUserData> {
        return this.httpClient.get<IUserData>(`${environment.apiUrl}/users`).pipe(
            tap(x => console.log(x)),
            map(x => {
                x.data = x.data.slice((params.page - 1) * params.pageSise, params.page * params.pageSise)
                return x;
            })
        );
    }
}