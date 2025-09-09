import { cpf } from "cpf-cnpj-validator"
import z from "zod"
export const userBodySchema = z.object({
        name: z.string().min(3, "name required"),
        surname: z.string().min(3, "surname required"),
        email: z.email("invalid email"),
        cpf: z.string().min(11, "invalid cpf").refine(cpf.isValid, "invalid cpf"),
        phone: z.string().min(11, "invalid phone"),
        password: z.string().min(3, "password required"),
})

export type User = z.infer<typeof userBodySchema>