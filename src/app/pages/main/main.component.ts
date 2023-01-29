import { Component, OnInit } from '@angular/core';

import { BrandService, UserService } from '@app/_services/api';
import { IBrand, ITableParams, IUser } from '@app/_models';
import { Entities } from '@app/_enums';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

    public brands: Array<IBrand> | undefined;
    public users: Array<IUser> | undefined;
    public lenght: number | undefined;

    public brandType: Entities = Entities.Brand;
    public userType: Entities = Entities.User;

    constructor(private brandService: BrandService, private userService: UserService) {
    }

    ngOnInit(): void {
    }

    getBrands(params: ITableParams): void {
        this.brandService.getBrands(params).subscribe(res => {
            this.brands = res.data;
            this.lenght = res.length;
        });
    }

    getUsers(params: ITableParams): void {
        this.userService.getUsers(params).subscribe(res => {
            this.users = res.data;
            this.lenght = res.length;
        });
    }
}