import { User } from "../../intities/User";
import { IMailProvider } from "../../provider/IMailProvider";
import { IUserRepository } from "../../repository/IUserRepository";
import { CreateUserResquestDTO } from "./CreateUserResquestDTO";

export class CreateUserUseCse {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data:CreateUserResquestDTO):Promise<void>{
   const userReadfyExits = await this.userRepository.findByMail(data.email);

   if(userReadfyExits){
    throw new Error('User Already Exits');
   }
   const user = new User(data);
   this.userRepository.save(user);
   this.mailProvider.sendMail({
    to:{
      name:'Google',
      email:'google@microsoft.com.br'
    },
    from:{
      name:data.name,
      email:data.email
    },
    subject: 'Vaga de Estágio',
    body:'<p>Você está dentro !!!!</p>'
   });
  }
}