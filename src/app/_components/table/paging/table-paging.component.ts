import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-paging',
    templateUrl: 'table-paging.component.html',
    styleUrls: ['./table-paging.component.scss'],
})

export class TablePagingComponent implements OnInit {
    
    @Input() lenght?: number;

    constructor() { }

    ngOnInit() { }
}