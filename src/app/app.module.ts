import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeSixComponent,
    BlogDetailsComponent,
    WorksDetailsComponent,
    ServicesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: HomeSixComponent},
      {path: "*", component: HomeSixComponent},
      {path: "works-details", component: WorksDetailsComponent},
      {path: "blog-details", component: BlogDetailsComponent},
      {path: "services-details", component: ServicesDetailsComponent},
    ], {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
