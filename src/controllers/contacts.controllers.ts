import { Request, Response } from "express";
import createContactsService from "../services/contacts/createContacts.service";
import allContactsService from "../services/contacts/readContacts.service";
import allContactsUserService from "../services/contacts/readUserContacts.service";
import updateContactService from "../services/contacts/updanteContatct.service";
import deleteContactService from "../services/contacts/deleteContatc.service";

const createContactsController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const contactsData = req.body;
  const userId = parseInt(resp.locals.user.id)

  const newUser = await createContactsService(contactsData, userId);

  return resp.status(201).json(newUser);
};

const allContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const Contact = await allContactsService();

  return response.json(Contact);
};

const allContactsUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = parseInt(response.locals.user.id)
  const Contact = await allContactsUserService(userId);

  return response.json(Contact);
};

const contactsUpdateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId = parseInt(request.params.id)
  const userId = parseInt(response.locals.user.id)

  const contact = await updateContactService(request.body, contactId, userId);
  return response.json(contact);
};

const contactsDeleteController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId = parseInt(request.params.id)
  const userId = parseInt(response.locals.user.id)

  const contact = await deleteContactService(contactId, userId);
  return response.json(contact);
}


export {createContactsController,allContactsController,allContactsUserController,contactsUpdateController,contactsDeleteController};
