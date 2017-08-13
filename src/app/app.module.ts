import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//libreria para formularios
import { FormsModule }   from '@angular/forms';
//bootstrap para angular4
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

//importamos routing
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //para ng-bootstrap
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
