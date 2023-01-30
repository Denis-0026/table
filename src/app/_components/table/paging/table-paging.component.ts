import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TableService } from '@app/_services/app';
import { Subscription, tap } from 'rxjs';

@Component({
    selector: 'app-table-paging',
    templateUrl: 'table-paging.component.html',
    styleUrls: ['./table-paging.component.scss'],
})

export class TablePagingComponent implements OnInit, OnDestroy {

    @Input() lenght?: number;
    @Input() pageSiseList: Array<number> = [5, 10, 15, 20, 25];

    public pageSise: number = 5;
    public page: number = 1;
    public lastPage: number = 1;
    
    private paramsSubscription: Subscription;

    constructor(private tableService: TableService) {
        this.paramsSubscription = new Subscription();
    }

    ngOnInit() {
        this.createParamsSubscription();
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    ngOnChanges(): void {
        if(this.lenght) {
            this.lastPage = Math.ceil(this.lenght / this.pageSise);
        }
    }

    changePageSise(sise: string): void {
        this.pageSise = Number(sise);
        if(this.pageSise && this.lenght) {
            this.lastPage = Math.ceil(this.lenght / this.pageSise);
            this.tableService.updatePageSise(this.pageSise);
        }
    }

    goToFirstPage(): void {
        this.page = 1;
        this.tableService.updatePage(this.page);
    }

    goToBackPage(): void {
        this.page--;
        if(this.page < 1) {
            this.page = 1;
        }
        this.tableService.updatePage(this.page);
    }

    goToNextPage(): void {
        this.page++;
        if(this.page > this.lastPage) {
            this.page = this.lastPage;
        }
        this.tableService.updatePage(this.page);
    }

    goToLastPage(): void {
        this.page = this.lastPage;
        this.tableService.updatePage(this.page);
    }

    createParamsSubscription(): void {
        this.paramsSubscription = this.tableService.params$.pipe(
            tap(params => {
                this.pageSise = params.pageSise;
                this.page = params.page;
            })
        ).subscribe();
    }
}