//paquetes para que funcione el routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch:'full'},
	{path: 'home', component: HomeComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'proposal', component: ProposalListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}