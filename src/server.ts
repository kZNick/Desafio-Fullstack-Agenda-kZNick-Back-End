import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Server is running");
    app.listen(3001, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
