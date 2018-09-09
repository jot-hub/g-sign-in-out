import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './g-signin/g-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, GoogleSignInComponent]
})
export class AppModule { }
