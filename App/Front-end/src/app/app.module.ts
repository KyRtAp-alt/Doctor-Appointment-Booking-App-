import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminHomepageComponent } from './Admin/admin-homepage/admin-homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './User/main-page/main-page.component';
import { HeaderComponent } from './Web-app/header/header.component';
import { NavBarComponent } from './Web-app/nav-bar/nav-bar.component';
import { SliderComponent } from './User/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomepageComponent,
    MainPageComponent,
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
