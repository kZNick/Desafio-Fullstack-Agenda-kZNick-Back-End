import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { appError } from "../../erros";

const deleteContactService = async (contactId: number, userId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

    const contactToDelete: any = await contactRepository
    .createQueryBuilder("contact")
    .leftJoinAndSelect("contact.user", "user")
    .where("contact.id = :id", { id: contactId })
    .getOne();

  if (!contactToDelete) {
    throw new appError("Contact not found", 404);
  }

  if (contactToDelete.user.id !== userId) {
    throw new appError("You are not allowed to delete a contact other than your own.", 403);
  }

  await contactRepository.remove(contactToDelete);
};

export default deleteContactService;
