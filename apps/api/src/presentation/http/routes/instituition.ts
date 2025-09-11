import type { FastifyInstance } from "fastify";
import z from "zod";
import { InstituitionService } from "../../../application/services/instituition";
import { InstituitionRepository } from "../../../infrastructure/database/repositories/instituition";
import { InstituitionController } from "../controllers/instituition";
import { intituitionBodySchema } from "../controllers/instituition/dto";

const instituitionRepository = new InstituitionRepository();
const instituitionService = new InstituitionService(instituitionRepository);
const instituitionController = new InstituitionController(instituitionService);

declare module "fastify" {
	interface FastifyInstance {
		instituitionController: InstituitionController;
	}
}
export const instituitionRouter = (app: FastifyInstance) => {
	app.decorate("instituitionController", instituitionController);

	app.post(
		"/",
		{
			schema: {
				body: intituitionBodySchema,
			},
		},
		app.instituitionController.store.bind(app.instituitionController),
	);
	app.get(
		"/",
		{},
		app.instituitionController.index.bind(app.instituitionController),
	);
	app.get(
		"/i/:id",
		{
			schema: {
				params: z.object({
					id: z.cuid(),
				}),
			},
		},
		app.instituitionController.show.bind(app.instituitionController),
	);
};
