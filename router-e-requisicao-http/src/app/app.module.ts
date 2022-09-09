import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPageComponent } from './components/new-page/new-page.component';
import { RenderListComponent } from './components/render-list/render-list.component';
import { RequisitionsApiComponent } from './components/requisitions-api/requisitions-api.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemDetailTwoComponent } from './components/item-detail-two/item-detail-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    RenderListComponent,
    RequisitionsApiComponent,
    CharactersComponent,
    ItemDetailComponent,
    ItemDetailTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
