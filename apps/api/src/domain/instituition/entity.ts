import cuid from "cuid";
import type { InstituitionData, InstitutionType } from "./types";

export class Instituition {
	private readonly id: string;
	private name: string;
	shortName: string;
	private logoUrl: string | null;
	type: InstitutionType;
	private primaryColor: string | null;

	private constructor(data: InstituitionData) {
		this.id = cuid();
		this.name = data.name;
		this.shortName = data.shortName;
		this.logoUrl = data.logoUrl;
		this.type = data.type;
		this.primaryColor = data.primaryColor;
	}

	public static create(data: InstituitionData) {
		return new Instituition(data);
	}

	public getData() {
		return {
			id: this.id,
			name: this.name,
			shoortName: this.shortName,
			logoUrl: this.logoUrl,
			type: this.type,
			primaryColor: this.primaryColor,
		};
	}
}
