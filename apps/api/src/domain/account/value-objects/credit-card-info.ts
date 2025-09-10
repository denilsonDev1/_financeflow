export class CreditCardInfo {
	constructor(
		private limitInCents: number,
		private dueDay: number,
		private closingDay: number,
	) {}

	public getData() {
		return {
			limitInCents: this.limitInCents,
			dueDay: this.dueDay,
			closingDay: this.closingDay,
		};
	}
}
