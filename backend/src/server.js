import express from "express";
import { Config } from "./config/index.js";
import mainRouter from "./routes/index.js";

const app = express();

app.use("/api", mainRouter);

app.listen(Config.PORT, () => {
  console.log(`Server is Listning on port ${Config.PORT}`);
});
