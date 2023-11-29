import { User } from "../../intities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByMail(email: string): Promise<User> {
    const user = await this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
