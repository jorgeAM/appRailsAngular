export class Proposal {
	constructor(
		//?: es para que sea opcional
		public id?: number,
		public customer?: string,
		public portfolio_url: string = 'http://',
		public tolls?: string,
		public estimated_hours?: number,
		public hourly_rate?: number,
		public weeks_to_complete?: number,
		public client_email?: string,
	){}
}