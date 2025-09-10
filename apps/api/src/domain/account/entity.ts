import cuid from "cuid";
import type { AccountType } from "./types";
import type { CreditCardInfo } from "./value-objects/credit-card-info";

type AccountData = {
	userId: string;
	instituitionId: string | null;
	name: string;
	type: AccountType;
	institution?: string;
	initialBalanceInCents: number;
	creditCardInfo?: CreditCardInfo;
};

export class Account {
	private userId: string;
	private instituitionId: string | null;
	private readonly id: string;
	private name: string;
	private type: AccountType;
	private institution?: string;
	private initialBalanceInCents: number;
	private creditCardInfo?: CreditCardInfo;

	private constructor(data: AccountData) {
		this.userId = data.userId;
		this.instituitionId = data.instituitionId;
		this.id = cuid();
		this.name = data.name;
		this.type = data.type;
		this.institution = data.institution;
		this.initialBalanceInCents = data.initialBalanceInCents;
		this.creditCardInfo = data.creditCardInfo;
	}

	public static create(data: AccountData) {
		return new Account(data);
	}

	public getData() {
		return {
			id: this.id,
			userId: this.userId,
			instituitionId: this.instituitionId,
			name: this.name,
			type: this.type,
			institution: this.institution,
			initialBalanceInCents: this.initialBalanceInCents,
			creditCardInfo: this.creditCardInfo?.getData(),
		};
	}
}
