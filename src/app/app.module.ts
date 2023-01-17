import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HeaderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
