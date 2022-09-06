import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
