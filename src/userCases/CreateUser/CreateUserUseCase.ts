import { User } from "../../intities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUsersRequestDTO } from "./CreateUsersResquestDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ){}

  async execute(data:CreateUsersRequestDTO): Promise<void>{
    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExits){
      throw new Error('User Already Exitis');
    }

    const user = new User(data);
    await this.usersRepository.save(user);
  }

}