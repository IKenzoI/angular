
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SegundoComponent } from './segundo/segundo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
