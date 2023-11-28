import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { StatusCodes } from "http-status-codes";

export class CreateUserControler {
  constructor(
   private createUserUserCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response):Promise<Response>{
    const { name, email, password } = request.body;

   try {
    await this.createUserUserCase.execute({
      name,
      email,
      password
    })
    return response.status(StatusCodes.CREATED).json({
      message: 'Usuário Criado com sucesso !!!'
    });
   } catch (err) {
    return response.status(StatusCodes.BAD_GATEWAY).json({
      message: err.massage
    });
   }
  }
}