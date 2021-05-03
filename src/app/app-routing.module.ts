import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

const routes: Routes = [
    {path: '', component: HomeSixComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'works-details', component: WorksDetailsComponent},
    {path: 'works-details/:id', component: WorksDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // {path: '**', component: HomeSixComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 25], })],
    exports: [RouterModule, Ng2PageScrollModule]
})
export class AppRoutingModule { }