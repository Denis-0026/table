import { Directive, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Directive()
export class BaseComponent<T> implements OnChanges {
    
    @Input() data?: Array<T>;
    @Input() lenght?: number;

    @Input() isShowHeader: boolean = true;
    @Input() isShowPaging: boolean = true;

    @Output() updateData = new EventEmitter<[number, number]>();

    public keys: Array<keyof T> | undefined;

    constructor() { }

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
        this.updateData.next(sise);
    }
}