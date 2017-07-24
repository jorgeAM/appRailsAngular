import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';

//importamos routing
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
