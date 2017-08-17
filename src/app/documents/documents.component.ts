import { Component, OnInit} from '@angular/core';
//observable
import { Observable } from 'rxjs/Rx';
//importamos nuesta interface
import { Documents } from './documents';
//importamos el servicio de documents
import { DocumentsService } from './documents.service';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [
  	DocumentsService
  ]
})
export class DocumentsComponent implements OnInit {
	documents: Documents[];
	errorMessage: string;
	mode = "Observable";

	constructor(private documentsService: DocumentsService){}
	
	ngOnInit(){
		let timer = Observable.timer(0, 5000);
		timer.subscribe(()=> this.getDocuments());
	}

	getDocuments(){
		this.documentsService.getDocuments()
			.subscribe(
				documents => this.documents = documents,
				error => this.errorMessage = <any>error
			);
	}
}
