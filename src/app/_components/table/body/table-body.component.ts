import { Component, Input, OnInit } from '@angular/core';
import { Entities } from '@app/_enums';

@Component({
    selector: 'app-table-body',
    templateUrl: 'table-body.component.html',
    styleUrls: ['./table-body.component.scss'],
})

export class TableBodyComponent<T> implements OnInit {

    @Input() data?: Array<T>;
    @Input() keys?: Array<keyof T>;
    @Input() type?: Entities;

    constructor() { }

    ngOnInit() { }
}