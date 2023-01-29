import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ITableParams } from '@app/_models';

@Injectable({providedIn: 'any'})
export class TableService {

    private _params: ITableParams = { page: 1, pageSise: 5 };
    private paramsBehavior: BehaviorSubject<ITableParams> = new BehaviorSubject<ITableParams>(this._params);
    public params$: Observable<ITableParams> = this.paramsBehavior.asObservable();

    constructor() {
    }
    
    updateAllParams(params: ITableParams): void {
        this._params = params;
        this.paramsBehavior.next(this._params);
    }

    updatePageSise(pageSise: number): void {
        this._params.pageSise = pageSise;
        this.paramsBehavior.next(this._params);
    }

    updatePage(page: number): void {
        this._params.page = page;
        this.paramsBehavior.next(this._params);
    }
}