import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TContact,
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities";
import { appError } from "../../erros";

export const createContactsService = async (
  data: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepo: Repository<any> = AppDataSource.getRepository(Contact);

  const existingContact = await contactRepo.findOne({
    where: [
      { user: { id: userId }, email: data.email },
      { user: { id: userId }, telefone: data.telefone },
    ],
  });

  if (existingContact) {
    throw new appError("There is already a contact with the same email or phone number registered for this user", 409);
  }

  data.user = userId

  const contactUser = contactRepo.create(data);

  await contactRepo.save(contactUser);


  return contactUser;
};

export default createContactsService;
