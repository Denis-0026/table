import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss'],
})

export class TableComponent<T> extends BaseComponent<T> implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }
}