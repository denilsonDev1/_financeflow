import { User as UserEntity } from "../../../domain/user/user.entity";
import type { UserRepository } from "../../../infrastructure/database/repositories/user";
import type { User } from "../../../presentation/http/controllers/user/dto";

export class CreateUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute(data: User){
        const entity = UserEntity.create(data).getData()
        const user = await this.userRepository.create(entity)
        return user
    }
}

