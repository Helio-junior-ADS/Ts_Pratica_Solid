import { MailtrapMailProvider } from "../../provider/implementation/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repository/implementation/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCse } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUserRepository();
const mailtrapProvider = new MailtrapMailProvider();


const createUserUseCase = new CreateUserUseCse(postgresUserRepository, mailtrapProvider);
const createUserController = new CreateUserController(createUserUseCase);


export { createUserUseCase, createUserController }