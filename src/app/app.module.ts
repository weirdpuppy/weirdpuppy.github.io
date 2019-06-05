import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DesignComponent } from './design/design.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SplashComponent } from './splash/splash.component';
import { IllustrationComponent } from './illustration/illustration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DesignComponent,
    HeaderComponent,
    ContentComponent,
    SplashComponent,
    IllustrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
