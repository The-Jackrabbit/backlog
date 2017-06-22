import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LoginComponent } from './splashscreen/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplashscreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
