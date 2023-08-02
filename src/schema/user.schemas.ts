import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  avatar: z.string().nullable(),
  password: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  deletedAt: true,
  createdAt: true,
  updatedAt: true,
  id: true,
});

const createUserSchema = z.object({
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  telefone: z.string(),
  password: z.string(),
});

const createUserPatchSchema = z.object({
  fullName: z.string().min(3).max(45).optional(),
  email: z.string().email().optional(),
  telefone: z.string().optional(),
  password: z.string().optional(),
  avatar: z.string().optional()
});
const userSchemaResponse = userSchema.omit({
  password: true,
});

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  createUserSchema,
  createUserPatchSchema,
};
