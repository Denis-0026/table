import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableModule } from '@app/_components';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        TableModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainModule { }
