import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-table-paging',
    templateUrl: 'table-paging.component.html',
    styleUrls: ['./table-paging.component.scss'],
})

export class TablePagingComponent implements OnInit {

    @Input() lenght?: number;
    @Input() pageSiseList: Array<number> = [5, 10, 15, 20, 25];

    // TODO
    @Output() selectedSise = new EventEmitter<[number, number]>();

    public pageSise: number = 5;
    public page: number = 1;
    public lastPage: number = 1;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(): void {
        if(this.lenght) {
            this.lastPage = Math.ceil(this.lenght / this.pageSise);
        }
    }

    changePageSise(sise: string): void {
        this.pageSise = Number(sise);
        if(this.pageSise && this.lenght) {
            this.lastPage = Math.ceil(this.lenght / this.pageSise);
            this.selectedSise.next([this.page, this.pageSise]);
        }
    }

    goToFirstPage(): void {
        this.page = 1;
        this.selectedSise.next([this.page, this.pageSise]);
    }

    goToBackPage(): void {
        this.page--;
        if(this.page < 1) {
            this.page = 1;
        }
        this.selectedSise.next([this.page, this.pageSise]);
    }

    goToNextPage(): void {
        this.page++;
        if(this.page > this.lastPage) {
            this.page = this.lastPage;
        }
        this.selectedSise.next([this.page, this.pageSise]);
    }

    goToLastPage(): void {
        this.page = this.lastPage;
        this.selectedSise.next([this.page, this.pageSise]);
    }
}