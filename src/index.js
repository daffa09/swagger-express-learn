import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import { getAll, getById, create, update, remove } from "./user.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDoc = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/users", getAll);
app.get("/users/:id", getById);
app.post("/users", create);
app.put("/users/:id", update);
app.delete("/users/:id", remove);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
