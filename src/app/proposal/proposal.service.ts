import { Injectable } from '@angular/core';
//clase proposal
import { Proposal } from './proposal';
//libreria para comunicarnos con la API documents
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//reactiveX
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ProposalService {
	//url de API
	private proposalUrl = 'http://localhost:3000/proposals';
	//constructor
	constructor(private http: Http){}

	getProposals(): Observable<Proposal[]>{
		//map para pasar el dato
		return this.http.get(this.proposalUrl)
				.map((res: Response) => <Proposal[]>res.json())
				.catch(this.handleError);
	}

	getProposal(id:number){
		return this.http.get(this.proposalUrl + '/' + id);
	}

	createProposal(proposal) {
	    let headers = new Headers({ 'Content-Type': 'application/json'});
	    let options = new RequestOptions({ headers: headers });
	    return this.http
	    	.post(this.proposalUrl, JSON.stringify(proposal), { headers: headers})
	    		.map((res: Response) => res.json());
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