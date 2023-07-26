import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserPatchSchema, createUserSchema } from "../schema/user.schemas";
import { allUsersController, createUserController, userDeleteController, userUpdateeController } from "../controllers/users.controllers";
import emailIsValidMiddleware from "../middlewares/ensureEmailIsValid";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";


const usersRoutes: Router = Router();

usersRoutes.post("",ensureDataIsValidMiddleware(createUserSchema),emailIsValidMiddleware , createUserController);
usersRoutes.get("", tokenIsValidmiddleware, allUsersController);
usersRoutes.patch("",tokenIsValidmiddleware,userUpdateeController)
usersRoutes.delete("",ensureDataIsValidMiddleware(createUserPatchSchema),tokenIsValidmiddleware,userDeleteController)


export default usersRoutes;
