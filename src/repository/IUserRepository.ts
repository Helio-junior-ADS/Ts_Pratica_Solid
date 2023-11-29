import { User } from "../intities/User";

export interface IUserRepository {
  findByMail(email:string):Promise<User>
  save(user:User):Promise<void>
}