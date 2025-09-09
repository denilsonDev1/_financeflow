import type { FastifyInstance } from "fastify";
import { userRouter } from "./user";


export const router = (app: FastifyInstance) => {
    app.register(userRouter, {prefix: "/user"})
}

