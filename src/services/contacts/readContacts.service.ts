import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { TContact, TContactResponse } from "../../interfaces/contacts.interfaces";

const allContactsService = async (): Promise<Array<TContact>> => {
  const  contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const contacts = await  contactRepository.find({ relations: ["user"] });

  return contacts;
};

export default allContactsService;
