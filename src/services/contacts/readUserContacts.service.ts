import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { TContact, TContactResponse } from "../../interfaces/contacts.interfaces";

const allContactsUserService = async (userId: number): Promise<Array<TContact>> => {
  const  contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    where: {
      user: { id: userId },
    },
  });

  return contacts;
};

export default allContactsUserService;
