import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createContactPatchSchema, createContactSchema } from "../schema/contacts.schemas";
import { allContactsController, allContactsUserController, contactsDeleteController, contactsUpdateController, createContactsController } from "../controllers/contacts.controllers";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";
import checkExistingContact from "../middlewares/ensureCheckExistingContact.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post("",ensureDataIsValidMiddleware(createContactSchema),tokenIsValidmiddleware,checkExistingContact, createContactsController)
contactsRoutes.get("", tokenIsValidmiddleware,allContactsController);
contactsRoutes.get("/user", tokenIsValidmiddleware,allContactsUserController);
contactsRoutes.patch("/:id",ensureDataIsValidMiddleware(createContactPatchSchema),tokenIsValidmiddleware, contactsUpdateController)
contactsRoutes.delete("/:id",tokenIsValidmiddleware, contactsDeleteController)

export default contactsRoutes;