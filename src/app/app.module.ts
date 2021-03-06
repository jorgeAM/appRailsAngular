import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//libreria para formularios
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
//bootstrap para angular4
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
//service de document
import { DocumentsService } from './documents/documents.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
//service de proposal
import { ProposalService } from './proposal/proposal.service';

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
    //para conectar api con angular
    HttpModule,
    //para ng-bootstrap
    NgbModule.forRoot()
  ],
  providers: [
    DocumentsService,
    ProposalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
