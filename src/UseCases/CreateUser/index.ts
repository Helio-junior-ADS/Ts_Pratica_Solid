import { MailtrapMailProvider } from "../../provider/implementation/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repository/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const mailtrapMailProvider = new MailtrapMailProvider();
const postgressUserRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgressUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };