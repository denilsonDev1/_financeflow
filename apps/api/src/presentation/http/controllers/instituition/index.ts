import type { FastifyReply, FastifyRequest } from "fastify";
import type { InstituitionService } from "../../../../application/services/instituition";
import type { InstituitionBody } from "./dto";
export class InstituitionController {
	constructor(private readonly instituitionService: InstituitionService) {}
	public async store(
		req: FastifyRequest<{ Body: InstituitionBody }>,
		res: FastifyReply,
	) {
		const result = await this.instituitionService.create(req.body);
		if (!result.success) {
			return res.code(400).send({ message: result.message });
		}
		return res.code(201).send({});
	}

	public async index(_req: FastifyRequest, res: FastifyReply) {
		return res.code(200).send({ message: "index" });
	}

	public async show(_req: FastifyRequest, res: FastifyReply) {
		return res.code(200).send({ message: "show" });
	}
}
