import { Component, Input, OnInit } from '@angular/core';
import { Direction, Entities } from '@app/_enums';
import { IFieldSort } from '@app/_models';
import { TableService } from '@app/_services/app';

@Component({
    selector: 'app-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss'],
})

export class TableHeaderComponent<T> implements OnInit {

    @Input() keys?: Array<keyof T>;
    @Input() type?: Entities;

    public sort: IFieldSort | null = null;

    constructor(private tableService: TableService) { }

    ngOnInit() {
    }

    sortColumn(key: string | number | symbol): void {
        if (this.sort && this.sort.key === key) {
            if (this.sort.direction === Direction.Asc) {
                this.sort.direction = Direction.Desc;
            } else {
                this.sort = null;
            }
        } else {
            this.sort = { key: key, direction: Direction.Asc };
        }
        this.tableService.updateDirection(this.sort);
    }

    search(key: string | number | symbol, event: string): void {
        this.tableService.updateFieldTerms(key as string, event);
    }
}