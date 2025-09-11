import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserUseCase } from "../../../../application/use-case/user/create-user";
import type { FindUserByIdUseCase } from "../../../../application/use-case/user/find-user-by-id";
import type { User } from "./dto";

export class UserController {
	constructor(
		private createUserUseCase: CreateUserUseCase,
		private findUserByIdUseCase: FindUserByIdUseCase,
	) {}
	public async store(req: FastifyRequest<{ Body: User }>, res: FastifyReply) {
		try {
			const data = await this.createUserUseCase.execute(req.body);
			if (!data.success) return res.code(400).send({ error: data.message });
			return res.code(201).send({});
		} catch (error) {
			console.error(error);
			return res.code(500).send({ error: "internal server error" });
		}
	}

	public async index(
		req: FastifyRequest<{ Params: { id: string } }>,
		res: FastifyReply,
	) {
		const users = await this.findUserByIdUseCase.execute(req.params.id);
		if (!users.success)
			return res.code(500).send({ error: "server internal error" });

		return res.code(200).send({
			data: users.data ?? {},
		});
	}
}
