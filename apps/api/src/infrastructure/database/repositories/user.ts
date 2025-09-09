import { Prisma, type User } from "@prisma/client";
import { db } from "..";
export class UserRepository {
    async create(data: Omit<User, "created_at" | "updated_at">): Promise<{success: boolean, message: string, data: User | null}>{
        try {
            const user = await db.user.create({
            data: data,
        })
            return {
                success: true,
                message: "user created",
                data: user
            }
        } catch (error) {
            console.error(error)
            console.log(error instanceof Prisma.PrismaClientKnownRequestError, "PErtence" )
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                
                if(error.code === "P2002"){
                    return {
                    success: false,
                    message: "user already exists",
                    data: null
                }
                }
                return {
                    success: false,
                    message: error.message,
                    data: null
                }
            }
             return {
                    success: false,
                    message: "error unknown",
                    data: null
                }
            
        }
    }

    public async findById(id: string): Promise<{success: boolean, message: string, data: Omit<User, "password"> | null}>{
        try{
            const user = await db.user.findUnique({
                where: {
                    id: id
                },
                omit: {
                    password: true
                }
            })
            return {
                success: true,
                message: "user found",
                data: user
            }
        }catch(error){
            console.error(error)
            return{
                success: false,
                message: "error unknown",
                data: null
            }
        }
    }
}
