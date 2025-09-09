import type { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "../../../../application/use-case/create-user";
import type { User } from "./dto";

export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase){
    }
    public async store(req: FastifyRequest<{Body: User}>, res: FastifyReply){
        try{
            const data = await this.createUserUseCase.execute(req.body)
            if(!data.success) return res.code(400).send({error: data.message})
            return res.code(201).send({})
        }catch(error){
            console.error(error)
            return res.code(500).send({error: "internal server error"})
        
        }
    }
}