export enum TransactionType {
	/**
	 * Representa qualquer entrada de dinheiro que aumenta o patrimônio líquido do usuário.
	 * Exemplos: Salário, venda de um produto, rendimentos de investimentos.
	 */
	INCOME = "INCOME",

	/**
	 * Representa qualquer saída de dinheiro que diminui o patrimônio líquido do usuário.
	 * É o tipo mais comum para gastos do dia a dia.
	 * Exemplos: Compras no supermercado, pagamento de contas de consumo, lazer.
	 */
	EXPENSE = "EXPENSE",

	/**
	 * Um tipo especial que representa o pagamento da fatura de um cartão de crédito
	 * usando o dinheiro de outra conta (ex: conta corrente).
	 * É crucial separá-lo de 'EXPENSE' para não contar o gasto duas vezes nos relatórios.
	 * O gasto real é a compra ('EXPENSE') no cartão; este é apenas o pagamento da dívida.
	 */
	CREDIT_CARD_PAYMENT = "CREDIT_CARD_PAYMENT",

	/**
	 * Representa a movimentação de dinheiro entre duas contas do próprio usuário.
	 * Não afeta o patrimônio líquido, apenas muda o dinheiro de lugar.
	 * Exemplo: Transferir R$ 500 da 'Conta Corrente' para a 'Carteira'.
	 * Este tipo é ignorado em relatórios de "Total de Despesas" vs "Total de Receitas".
	 */
	INTERNAL_TRANSFER = "INTERNAL_TRANSFER",
}

export type TrasactionData = {
	userId: string;
	accountId: string;
	description?: string;
	amountInCents: number;
	type: TransactionType;
	postingDate: Date;
	transferId?: string;
	currency: Currency;
};

export enum Currency {
	BRL = "BRL",
	USD = "USD",
	EUR = "EUR",
}
