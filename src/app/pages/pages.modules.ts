import { NgModule } from '@angular/core';

import { SHARED_MODULE } from '../shared/shared.modules';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { from } from 'rxjs';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    imports:[
        SHARED_MODULE,
        PAGES_ROUTES
    ]
})

export class PageModule { }
