import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColumnDirective } from '@app/_directives/table/column.directive';
import { TableHeaderPipe } from '@app/_pipes/table/table-header.pipe';

import { TableComponent } from './table.component';
import { TableHeaderComponent } from './header/table-header.component';
import { TableBodyComponent } from './body/table-body.component';
import { TablePagingComponent } from './paging/table-paging.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TableComponent,
        TableHeaderPipe
    ],
    declarations: [
        ColumnDirective,
        TableHeaderPipe,
        TableComponent, 
        TableHeaderComponent,
        TableBodyComponent,
        TablePagingComponent,
    ],
    providers: [],
})
export class TableModule { }
