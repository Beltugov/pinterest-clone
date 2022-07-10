require("dotenv").config();
import express from "express";
import router from "./routes/router";
import { AppDataSource } from "./data-source";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

const main = () => {
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
