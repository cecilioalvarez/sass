import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
