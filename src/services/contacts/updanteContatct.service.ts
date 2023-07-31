import { Not, Repository } from "typeorm";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  TContactRequest,
  TContactResponse,
  TContactUpdatetREquest,
} from "../../interfaces/contacts.interfaces";
import { appError } from "../../erros";

const updateContactService = async (
  contactData: TContactUpdatetREquest,
  contactId: number,
  userId: number
): Promise<Array<Contact>> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const existingContact = await contactRepository.findOne({
    where: {
      id: contactId,
      user: { id: userId },
    },
  });

  if (!existingContact) {
    throw new appError("Contact not found", 404);
  }

  const oldContactData: any = await contactRepository.findOneBy({
    id: contactId,
  });

  if (contactData.email) {
    const emailAlreadyUsed = await contactRepository.findOne({
      where: {
        email: contactData.email,
        user: { id: userId },
        id: Not(contactId),
      },
    });

    if (emailAlreadyUsed) {
      throw new appError(
        "Email already exists",
        409
      );
    }
  }

  if (contactData.telefone) {
    const telefoneAlreadyUsed = await contactRepository.findOne({
      where: {
        telefone: contactData.telefone,
        user: { id: userId },
        id: Not(contactId),
      },
    });

    if (telefoneAlreadyUsed) {
      throw new appError(
        "telefone already exists",
        409
      );
    }
  }

  const newContactData: Contact[] = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });
  await contactRepository.save(newContactData);

  return newContactData;
};

export default updateContactService;
