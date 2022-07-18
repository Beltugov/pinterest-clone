require("dotenv").config();
import path from "path";
import express from "express";
import router from "./routes/router";
import { AppDataSource } from "./data-source";
import cors from "cors";
import fileUpload from "express-fileupload";

const main = () => {
  const PORT = process.env.PORT || 8000;
  const app = express();
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, "img")));
  app.use(fileUpload({}));
  app.use(cors());
  app.use("/api", router);
  AppDataSource.initialize()
    .then(async () => {
      app.listen(PORT, () => console.log(`server start on PORT ${PORT}`));
    })
    .catch((error) => console.log(error));
};

try {
  main();
} catch (e) {
  console.log(e);
}
