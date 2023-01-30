import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-body',
    templateUrl: 'table-body.component.html',
    styleUrls: ['./table-body.component.scss'],
})

export class TableBodyComponent<T> implements OnInit {

    @Input() data?: Array<T>;
    @Input() keys?: Array<keyof T>;

    constructor() { }

    ngOnInit() { }
}