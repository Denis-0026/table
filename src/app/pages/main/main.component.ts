import { Component, OnInit } from '@angular/core';

import { BrandService } from '@app/_services/api';
import { IBrand, ITableParams } from '@app/_models';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

    public brands: Array<IBrand> | undefined;
    public lenght: number | undefined;

    constructor(private brandService: BrandService) {
    }

    ngOnInit(): void {
    }

    getBrands(params: ITableParams): void {
        this.brandService.getBrands(params).subscribe(res => {
            this.brands = res.data;
            this.lenght = res.length;
        });
    }
}