import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ITableParams } from '@app/_models';

@Injectable({providedIn: 'root'})
export class TableService {

    private paramsBehavior: BehaviorSubject<ITableParams> = new BehaviorSubject<ITableParams>({ page: 1, pageSise: 5 });
    public params$: Observable<ITableParams> = this.paramsBehavior.asObservable();

    constructor() {
    }
    
    updateParams(params: ITableParams): void {
        this.paramsBehavior.next(params);
    }
}