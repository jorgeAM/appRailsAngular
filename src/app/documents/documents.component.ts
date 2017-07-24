import { Component } from '@angular/core';

//importamos nuesta interface
import { Documents } from './documents';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
	documents: Documents[] = [
		{
			title: "My first Doc",
			description: "Agg tmr!!",
			file_url: "http://google.com",
			update_at: "24/07/16",
			image_url: "http://google.com"
		},
		{
			title: "My second Doc",
			description: "Alto ahi Crrano!",
			file_url: "http://google.com",
			update_at: "24/07/16",
			image_url: "http://google.com"
		},
		{
			title: "My last Doc",
			description: "Agg csm!!",
			file_url: "http://google.com",
			update_at: "24/07/16",
			image_url: "http://google.com"
		}
	];
}
