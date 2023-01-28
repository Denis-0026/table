import { Component, OnInit } from '@angular/core';
import { IBrand } from '@app/_models';

import { BrandService } from '@app/_services/api';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

    public brands: Array<IBrand> | undefined;
    public lenght: number | undefined;

    constructor(private brandService: BrandService) { }

    ngOnInit(): void {
        this.getBrands();
    }

    getBrands(): void {
        this.brandService.getBrands().subscribe(res => {
            this.brands = res.data;
            this.lenght = res.length;
        });
    }
}