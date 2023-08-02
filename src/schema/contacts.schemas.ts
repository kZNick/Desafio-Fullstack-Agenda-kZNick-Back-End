import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  telefone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.number(),
});

const contactSchemaRequest = contactSchema.omit({
    createdAt: true,
    updatedAt: true,
    id: true,
  });

  const createContactSchema = z.object({
    fullName: z.string().min(3).max(45),
    email: z.string().email(),
    telefone: z.string().min(8).max(20),
  });

  const createContactPatchSchema = z.object({
    fullName: z.string().min(3).max(45).optional(),
    email: z.string().email().optional(),
    telefone: z.string().optional(),
  });

  export {contactSchema, contactSchemaRequest, createContactSchema, createContactPatchSchema }