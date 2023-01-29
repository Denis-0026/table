import { Directive, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

import { ITableParams } from '@app/_models';
import { Entities } from '@app/_enums';
import { TableService } from '@app/_services/app';
import { Subscription, tap } from 'rxjs';

@Directive()
export class BaseComponent<T> implements OnInit, OnChanges, OnDestroy {
    
    @Input() data?: Array<T>;
    @Input() lenght?: number;
    @Input() type?: Entities;
    @Input() isShowHeader: boolean = true;
    @Input() isShowPaging: boolean = true;

    @Output() updateData = new EventEmitter<ITableParams>();

    public keys: Array<keyof T> | undefined;
    private paramsSubscription: Subscription;

    constructor(protected tableService: TableService) {
        this.paramsSubscription = new Subscription();
    }

    ngOnInit() {
        this.createParamsSubscription();
    }

    ngOnChanges() {
        if(this.data && !this.keys) {
            this.getPropertiesKeys();
        }
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }

    createParamsSubscription(): void {
        this.paramsSubscription = this.tableService.params$.pipe(
            tap(params => {
                this.updateData.next(params);
            })
        ).subscribe();
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