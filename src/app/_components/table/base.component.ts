import { Directive, Input, OnChanges } from '@angular/core';

import { ITableParams } from '@app/_models';
import { TableService } from '@app/_services/app';

@Directive()
export class BaseComponent<T> implements OnChanges {
    
    @Input() data?: Array<T>;
    @Input() lenght?: number;

    @Input() isShowHeader: boolean = true;
    @Input() isShowPaging: boolean = true;

    public keys: Array<keyof T> | undefined;
    public params: ITableParams = { page: 1, pageSise: 5 };

    constructor(public tableService: TableService) { }

    ngOnChanges() {
        if(this.data) {
            this.getPropertiesKeys();
        }
    }

    getPropertiesKeys(): void {
        this.keys = [];
        let el = this.data?.find(x => x !== undefined);
        if(el) {
            for (let key in el) {
                this.keys.push(key as keyof T);
            }
        }
    }

    changePageSise(sise: [number, number]): void {
        this.params.page = sise[0];
        this.params.pageSise = sise[1];
        this.tableService.updateParams(this.params);
    }
}