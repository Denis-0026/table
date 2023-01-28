import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-table-paging',
    templateUrl: 'table-paging.component.html',
    styleUrls: ['./table-paging.component.scss'],
})

export class TablePagingComponent implements OnInit {

    @Input() lenght?: number;
    @Input() rowsOnPageList: Array<number> = [5, 10, 15, 20, 25];

    @Output() selectedSise = new EventEmitter<number>();

    private rowsOnPage: number = 5;
    private page: number = 1;

    constructor() { }

    ngOnInit() { }

    changePageSise(sise: string): void {
        this.rowsOnPage = Number(sise);
        if(this.rowsOnPage) {
            this.selectedSise.next(this.rowsOnPage);
        }
        
    }

    goToFirstPage(): void {
        this.page = 1;
        console.log(this.page);
    }

    goToBackPage(): void {
        this.page--;
        if(this.page < 1) {
            this.page = 1;
        }
        console.log(this.page);
    }

    goToNextPage(): void {
        this.page++;
        console.log(this.page);
    }

    goToLastPage(): void {
        console.log(this.page);
    }
}