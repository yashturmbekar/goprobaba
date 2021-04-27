import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeSixComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'works-details', component: WorksDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 25], })],
    exports: [RouterModule]
})
export class AppRoutingModule { }