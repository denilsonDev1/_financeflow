import fastifySwagger from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import { erroHandler } from "./infrastructure/handlers/errorHandler";
import { router } from "./presentation/http/routes";
export const app = fastify({ logger: true });
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "FinanceFlow",
			description: "",
			version: "1.0.0",
		},
	},

	mode: "dynamic",
	transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
	routePrefix: "/docs",
});
app.setErrorHandler(erroHandler);
app.register(router);
