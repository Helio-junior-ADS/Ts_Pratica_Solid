import { MailtrapMailProvider } from "../../provider/implementation/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repository/implementation/PostgresUserRepository";
import { CreateUserControler } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRespository = new PostgresUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(postgresUserRespository,mailtrapMailProvider);

const createUserController = new CreateUserControler(createUserUseCase);

export {createUserController, createUserUseCase};