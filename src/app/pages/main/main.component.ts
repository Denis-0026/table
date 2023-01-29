import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';

import { BrandService } from '@app/_services/api';
import { TableService } from '@app/_services/app';
import { IBrand, ITableParams } from '@app/_models';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit, OnDestroy {

    public brands: Array<IBrand> | undefined;
    public lenght: number | undefined;

    private brandsSubscription: Subscription;

    constructor(private brandService: BrandService, private tableService: TableService) {
        this.brandsSubscription = new Subscription();
    }

    ngOnInit(): void {
        this.createBrandsSubscription();
    }

    createBrandsSubscription(): void {
        this.brandsSubscription = this.tableService.params$.pipe(
            tap(params => {
                this.getBrands(params);
            })
        ).subscribe();
    }

    getBrands(params: ITableParams): void {
        this.brandService.getBrands(params).subscribe(res => {
            this.brands = res.data;
            this.lenght = res.length;
        });
    }

    ngOnDestroy(): void {
        this.brandsSubscription.unsubscribe();
    }
}