import { Injectable } from '@angular/core';
//libreria para comunicarnos con la API documents
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//reactiveX
import {Observable} from 'rxjs/Rx';
//interface
import { Documents } from './documents';

@Injectable()

export class DocumentsService{
	private documentsUrl = 'http://localhost:3000/my_documents';
	data:any = {};

	constructor(private http: Http){}

	getDocuments(): Observable<Documents[]>{
		//map para pasar el dato
		return this.http.get(this.documentsUrl)
				.map((res: Response) => <Documents[]>res.json())
				.catch(this.handleError);
	}

	private handleError (error: Response | any){
    	// In a real world app, we might use a remote logging infrastructure
	    let errMsg: string;
	    if (error instanceof Response){
	    	const body = error.json() || '';
	    	const err = body.error || JSON.stringify(body);
	    	errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    }
	    else{
	    	errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	}

}