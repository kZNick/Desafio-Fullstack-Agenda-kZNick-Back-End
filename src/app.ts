import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./erros";
import usersRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";


const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes)

app.use(handleErrors);

export default app;