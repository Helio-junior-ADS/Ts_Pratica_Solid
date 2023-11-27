import { Router } from "express";
import {StatusCodes} from 'http-status-codes'

const router = Router();

router.get('/users', (request, response) =>{
  return response.status(StatusCodes.ACCEPTED).send("Hello word");
});

export { router };