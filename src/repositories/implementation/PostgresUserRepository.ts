import { User } from "../../intities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = await this.users.find(user => user.email === email);

    return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user);  
  }
}