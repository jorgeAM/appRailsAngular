import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
//observable
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
//importamos el servicio de proposal
import { ProposalService } from './proposal.service';


@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  providers: [
  	ProposalService
  ]
})

export class ProposalListComponent implements OnInit{
	//array de clase proposal
	proposals: Proposal[];
	errorMessage; string;
	mode = "Observable"
	//constructor
	constructor(
		private proposalService: ProposalService,
		private router: Router
	){}

	ngOnInit(){
		let timer = Observable.timer(0, 5000);
		timer.subscribe(()=> this.getProposals());
	}

	getProposals(){
		this.proposalService.getProposals()
			.subscribe(
				proposals => this.proposals = proposals,
				error => this.errorMessage = <any>error
			);
	}

	goToShow(proposal: Proposal):void{
		let link = ['/proposal', proposal.id];
		this.router.navigate(link);
	}
}
