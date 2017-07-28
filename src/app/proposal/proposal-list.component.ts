import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(
		15, 'Abc Company', 'http://google.com', 'RoR', 150, 120, 15, 'jorge.alfmur@gmail.com');
	proposalTwo: Proposal = new Proposal(
		99, 'Xyz Company', 'http://facebook.com', 'RoR', 150, 120, 15, 'jorge.alfmur@hotmail.com');
	proposalThree: Proposal = new Proposal(
		300, '123 Company', 'http://twitter.com', 'RoR', 150, 120, 15, 'jorge.alfmur@outlook.com');

	proposals: Proposal[] = [
		this.proposalOne, this.proposalTwo, this.proposalThree
	];
}
