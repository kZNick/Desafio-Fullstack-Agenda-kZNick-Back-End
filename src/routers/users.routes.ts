import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserPatchSchema, createUserSchema } from "../schema/user.schemas";
import { allUsersController, createUserController, userDeleteController, userUpdateeController } from "../controllers/users.controllers";
import emailIsValidMiddleware from "../middlewares/ensureEmailIsValid";
import tokenIsValidmiddleware from "../middlewares/ensureTokenIsValid.middleware";
import telefoneIsValidMiddleware from "../middlewares/ensureTelephoneValid";


const usersRoutes: Router = Router();

usersRoutes.post("",ensureDataIsValidMiddleware(createUserSchema),emailIsValidMiddleware ,telefoneIsValidMiddleware, createUserController);
usersRoutes.get("", tokenIsValidmiddleware, allUsersController);
usersRoutes.patch("",ensureDataIsValidMiddleware(createUserPatchSchema), tokenIsValidmiddleware,userUpdateeController)
usersRoutes.delete("",tokenIsValidmiddleware,userDeleteController)


export default usersRoutes;
