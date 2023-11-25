import { Router } from "express";
import { StatusCodes } from "http-status-codes"
import { createUserController } from "./UseCases/CreateUser";


const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

export { router };