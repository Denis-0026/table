import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss'],
})

export class TableHeaderComponent<T> implements OnInit {

    @Input() keys?: Array<keyof T>;

    constructor() { }

    ngOnInit() {
    }
}