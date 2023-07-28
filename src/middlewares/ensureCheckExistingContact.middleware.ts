import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TContactRequest } from "../interfaces/contacts.interfaces";
import { Contact } from "../entities";
import { appError } from "../erros";

const checkExistingContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data: TContactRequest = req.body;
  const userId: number = parseInt(res.locals.user.id)

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const existingContact = await contactRepo.findOne({
    where: [
      { user: { id: userId }, email: data.email },
      { user: { id: userId }, telefone: data.telefone },
    ],
  });

  if (existingContact) {
    throw new appError("There is already a contact with the same email or phone number registered for this user", 409);
  }

    return next();
};

export default checkExistingContact;