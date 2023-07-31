import { NextFunction, Request, Response } from "express";
import User from "../entities/users.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { appError } from "../erros";

const telefoneIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const telefone: string = req.body.telefone;

  let users: User[] | undefined;

  users = await userRepo.findBy({
    telefone: telefone,
  });

  if (users.length > 0) {
    throw new appError("telefone already exists", 409);
  }

  return next();
};

export default telefoneIsValidMiddleware;
