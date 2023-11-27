import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { StatusCodes } from "http-status-codes";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request:Request, response:Response):Promise<Response>{
    const {name, email, password} = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password
      });
      return response.status(StatusCodes.CREATED).json({
        message: "Usuário criado com sucesso"
      });
    } catch (err){
      return response.status(StatusCodes.EXPECTATION_FAILED).json({
        message: err.message
      });
    }
  }


}