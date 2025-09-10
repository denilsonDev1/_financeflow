import cuid from "cuid";
import type { Currency, TransactionType, TrasactionData } from "./types";

export class Trasaction {
	private id: string;
	private userId: string;
	private accountId: string;
	private description?: string;
	private amountInCents: number;
	private type: TransactionType;
	private postingDate: Date;
	private transferId?: string;
	private currency: Currency;

	private constructor(data: TrasactionData) {
		this.id = cuid();
		this.userId = data.userId;
		this.accountId = data.accountId;
		this.description = data.description;
		this.amountInCents = data.amountInCents;
		this.type = data.type;
		this.postingDate = data.postingDate;
		this.transferId = data.transferId;
		this.currency = data.currency;
	}

	public static create(data: TrasactionData) {
		return new Trasaction(data);
	}

	public getData() {
		return {
			id: this.id,
			userId: this.userId,
			accountId: this.accountId,
			description: this.description,
			amountInCents: this.amountInCents,
			type: this.type,
			postingDate: this.postingDate,
			transferId: this.transferId,
			currency: this.currency,
		};
	}
}
