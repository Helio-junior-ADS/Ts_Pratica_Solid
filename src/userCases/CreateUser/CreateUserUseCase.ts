import { User } from "../../intities/User";
import { IMailtraProvider } from "../../provider/IMailtrapProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUsersRequestDTO } from "./CreateUsersResquestDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailtrapMailProvider: IMailtraProvider
  ){}

  async execute(data:CreateUsersRequestDTO): Promise<void>{
    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExits){
      throw new Error('User Already Exits');
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailtrapMailProvider.sendMail({
      to:{
        name:'Google',
        email:'google@google.com'
      },
      from:{
        name:data.name,
        email:data.email
      },
      subject:"Vaga de senior",
      body: '<p>Parabéns Foi está contratado para vaga de estágio</p>'
    });
  }

}