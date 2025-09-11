export enum InstitutionType {
	BANK = "BANK", // Bancos comerciais tradicionais
	INVESTMENT_BROKER = "INVESTMENT_BROKER", // Corretoras de Investimento
	FINTECH = "FINTECH", // Bancos digitais e outras fintechs
	OTHER = "OTHER", // Outros tipos
}

export type InstituitionData = {
	name: string;
	shortName: string;
	logoUrl: string | null;
	type: InstitutionType;
	primaryColor: string | null;
};
