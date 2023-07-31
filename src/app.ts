import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./erros";
import usersRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import contactsRoutes from "./routers/contacts.routes";
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactsRoutes);

app.use(handleErrors);

export default app;
