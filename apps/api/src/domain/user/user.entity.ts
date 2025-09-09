import cuid from "cuid";
import { Password } from "./value-objects/password";
type UserData = {
    email: string;
    cpf: string
    name:string
    password: string
    surname: string
    phone: string 
}

export class User{
    private _id: string;
    private _email: string;
    private _cpf: string
    private _name:string
    private _password: string
    private _surname: string 
    private _phone: string 



    private constructor(_data: UserData){
        this._id = cuid();
        this._email = _data.email;
        this._cpf = _data.cpf;
        this._name = _data.name;
        this._password = Password.generateHash(_data.password);
        this._surname = _data.surname;
        this._phone = _data.phone;
    }

    public static create(data: UserData){
        return new User(data)
    }

    public getData(){
        return {
            id: this._id,
            email: this._email,
            cpf: this._cpf,
            name: this._name,
            password: this._password,
            surname: this._surname,
            phone: this._phone,
        }
    }
    
}