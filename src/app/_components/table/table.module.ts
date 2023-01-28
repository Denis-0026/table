import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';
import { ColumnDirective } from '@app/_directives/table/column.directive';
import { TableHeaderPipe } from '@app/_pipes/table/table-header.pipe';
import { TableHeaderComponent } from './header/table-header.component';
import { TableBodyComponent } from './body/table-body.component';
import { TableFooterComponent } from './footer/table-footer.component';

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
        TableFooterComponent,
    ],
    providers: [],
})
export class TableModule { }
