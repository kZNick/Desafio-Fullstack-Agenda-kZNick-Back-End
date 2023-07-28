import { z } from "zod";
import { Contact } from "../entities";
import { contactSchema, contactSchemaRequest, createContactPatchSchema } from "../schema/contacts.schemas";

type TContact = Contact;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;

type TContactUpdatetREquest = z.infer<typeof createContactPatchSchema>;

export {TContact, TContactRequest, TContactResponse, TContactUpdatetREquest}