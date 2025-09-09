import type { UserRepository } from "../../../infrastructure/database/repositories/user";



export class FindUserByIdUseCase{

     constructor(private userRepository: UserRepository){}

     public async execute(id: string){
        const user = await this.userRepository.findById(id)
        return user
     }
    
}