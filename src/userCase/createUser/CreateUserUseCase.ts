import { User } from "../../entities/User";
import { MailtrapMailProvider } from "../../provider/implementation/MailtrapMailProvider";
import { IUserRepository } from "../../repository/IUserRepository";
import { CreateUserRequestDTO } from "./CreateUserResquestDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailtrapMailProvider: MailtrapMailProvider
  ){}

  async execute(data:CreateUserRequestDTO):Promise<void>{
    const userReadyExits = await this.userRepository.findByEmail(data.email);

    if(userReadyExits){
      throw new Error('User Ready Exits');
    }

    const user = new User(data);
    this.userRepository.save(user);
    this.mailtrapMailProvider.sendMail({
      to:{
        name:'Google',
        email:'google#microsoft.com'
      },
      from:{
        name: data.name,
        email: data.email
      },
      subject: 'Vaga de Estágio Google',
      body: '<p>Prezado Sr. Hélio Tenho um inorme prazer de informar que o sr foi aceito no programa de estagiarios da google. PARABÉNS !!!!!</p>'
    })
  }


}