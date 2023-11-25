import { User } from "../../entities/User";
import { IMailProvider } from "../../provider/IMailProvider";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { ICreateUserResquestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

   async execute(data: ICreateUserResquestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

      if(userAlreadyExists){
        throw new Error("User Already Exists");
      }

      const user = new User(data);
      await this.usersRepository.save(user);
      await this.mailProvider.sendMail({
        to: {
          name: data.name,
          email: data.email
        },
        from: {
          name: "RH GOOGLE",
          email: "google.google.com"
        },
        subject: "Vaga de Senior",
        body:  "<p>Parabéns Você passou, Começa na amanhã</p>"
      });
   }
}