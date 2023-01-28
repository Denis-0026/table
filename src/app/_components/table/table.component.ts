import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss'],
})

export class TableComponent<T> implements OnInit, OnChanges {

    @Input() data?: Array<T>;
    @Input() lenght?: number;

    @Input() isShowHeader: boolean = true;
    @Input() isShowPaging: boolean = true;

    public keys: Array<keyof T> | undefined;

    constructor() {
    }

    ngOnInit() {
    }

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
}