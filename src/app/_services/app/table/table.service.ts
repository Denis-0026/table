import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFieldSort, ITableParams } from '@app/_models';

@Injectable({providedIn: 'any'})
export class TableService {

    private _params: ITableParams = { page: 1, pageSise: 5, fieldTerms: [], sort: null };
    private paramsBehavior: BehaviorSubject<ITableParams> = new BehaviorSubject<ITableParams>(this._params);
    public params$: Observable<ITableParams> = this.paramsBehavior.asObservable();

    constructor() {
    }
    
    updateAllParams(params: ITableParams): void {
        this._params.page = 1;
        this._params = params;
        this.paramsBehavior.next(this._params);
    }

    updatePageSise(pageSise: number): void {
        this._params.page = 1;
        this._params.pageSise = pageSise;
        this.paramsBehavior.next(this._params);
    }

    updatePage(page: number): void {
        this._params.page = page;
        this.paramsBehavior.next(this._params);
    }

    updateDirection(sort: IFieldSort | null): void {
        this._params.page = 1;
        this._params.sort = sort;
        this.paramsBehavior.next(this._params);
    }

    updateFieldTerms(key: string | number | symbol, term: string): void {
        this._params.page = 1;
        const value = this._params.fieldTerms.find(x => x.key === key);
        if(value) {
            if (term && term !== '') {
                value.term = term;
            } else {
                this._params.fieldTerms.splice(this._params.fieldTerms.indexOf(value), 1);
            }
        } else {
            this._params.fieldTerms.push({ key: key, term: term });
        }
        this.paramsBehavior.next(this._params);
    }
}