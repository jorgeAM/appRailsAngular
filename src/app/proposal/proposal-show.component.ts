import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-show',
  templateUrl: './proposal-show.component.html',
})

export class ProposalShowComponent {
	proposal: Proposal = new Proposal;
}
