import { z } from "zod";

const typeSchema = z.enum(["BANK", "INVESTMENT_BROKER", "FINTECH", "OTHER"]);

export const intituitionBodySchema = z.object({
	name: z.string().min(3),
	shortName: z.string().min(3),
	logoUrl: z.string().nullable(),
	type: typeSchema,
	primaryColor: z.string().nullable(),
});

export type InstituitionBody = z.infer<typeof intituitionBodySchema>;
