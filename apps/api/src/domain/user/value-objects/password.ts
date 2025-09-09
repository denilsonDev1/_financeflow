import bcrypt from "bcrypt"


export class Password{
    
    public static generateHash(password: string){
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        return hash
    }
    }