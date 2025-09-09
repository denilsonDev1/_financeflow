import fastifySwagger from "@fastify/swagger"
import { fastify } from "fastify"
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { erroHandler } from "./infrastructure/handlers/errorHandler"
import { userRouter } from "./presentation/http/routes/user"

export const app = fastify({logger: true})
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
    mode: "dynamic",
    transform: jsonSchemaTransform,
})
app.setErrorHandler(erroHandler)
app.register(userRouter, {prefix: "/user"})
