import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { CreateUserUseCase } from "../../../application/use-case/user/create-user";
import { FindUserByIdUseCase } from "../../../application/use-case/user/find-user-by-id";
import { UserRepository } from "../../../infrastructure/database/repositories/user";
import { UserController } from "../controllers/user";
import { userBodySchema } from "../controllers/user/dto";
const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const findUserByIdUseCase = new FindUserByIdUseCase(userRepository)
    const userController = new UserController(createUserUseCase, findUserByIdUseCase)
export const userRouter = (app: FastifyInstance) => {
    
    app.post("/", {
        schema: {
            body: userBodySchema
        }
    },userController.store.bind(userController))

    app.get("/:id", {
        schema: {
            params: z.object({
                id: z.cuid()
            })
        }
    }, userController.index.bind(userController))

}