import type { FastifyInstance } from "fastify";
import { CreateUserUseCase } from "../../../application/use-case/create-user";
import { UserRepository } from "../../../infrastructure/database/repositories/user";
import { UserController } from "../controllers/user";
import { userBodySchema } from "../controllers/user/dto";
const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const userController = new UserController(createUserUseCase)
export const userRouter = (app: FastifyInstance) => {
    
    app.post("/", {
        schema: {
            body: userBodySchema
        }
    },userController.store.bind(userController))
}