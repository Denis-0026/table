import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '@app/_services/app';

@Component({
    selector: 'app-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss'],
})

export class TableHeaderComponent<T> implements OnInit {

    @Input() keys?: Array<keyof T>;

    constructor(private tableService: TableService) { }

    ngOnInit() {
    }

    search(key: string | number | symbol, event: string): void {
        this.tableService.updateFieldTerms(key as string, event);
    }
}