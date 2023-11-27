import { MailtrapMailProvider } from "../../provider/implementation/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementation/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailtrapMailProvider();
const postGresUserRepository = new PostgresUserRepository()

const createUserUserCase = new CreateUserUseCase(
  postGresUserRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUserCase
);

export {createUserController, createUserUserCase};