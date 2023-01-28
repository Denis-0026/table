import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';

import { fakeBackendProvider } from '@app/_helpers';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RootRoutingModule
    ],
    providers: [fakeBackendProvider],
    bootstrap: [RootComponent]
})
export class RootModule { }
