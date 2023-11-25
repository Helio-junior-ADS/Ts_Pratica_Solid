import { StatusCodes } from "http-status-codes";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express"

export class CreateUserController {
  constructor (
    private createUserUserCase: CreateUserUseCase
  ){}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body;

    try {
      await this.createUserUserCase.execute({
        name,
        email,
        password
      });
      return response.status(StatusCodes.CREATED).json({
        message: "Usuário criado com sucesso !!!"
      })

    } catch (err){
      return response.status(StatusCodes.BAD_GATEWAY).json({
        message: err.message || "Unespected erro./"
      });
    }
  }
}