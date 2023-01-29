import { Component, OnInit } from '@angular/core';
import { TableService } from '@app/_services/app';

import { BaseComponent } from './base.component';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss'],
    providers: [TableService],
})

export class TableComponent<T> extends BaseComponent<T> implements OnInit {

    constructor(tableService: TableService) {
        super(tableService);
    }
}