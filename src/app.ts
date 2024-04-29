import express from "express";
import { myDataSource } from "./db/repositories/datasource";
import cors from "cors";
import "reflect-metadata";
import userRoutes from "./routes/userRoutes";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

// register routes
// app.get("/users", async function (req: Request, res: Response) {
//   const users = await myDataSource.getRepository(User).find();
//   res.json(users);
// });

// app.get("/users/:id", async function (req: Request, res: Response) {
//   const results = await myDataSource.getRepository(User).findOneBy({
//     id: req.params.id,
//   });
//   return res.send(results);
// });

// app.post("/users", async function (req: Request, res: Response) {
//   const user = await myDataSource.getRepository(User).create(req.body);
//   const results = await myDataSource.getRepository(User).save(user);
//   return res.send(results);
// });

// app.put("/users/:id", async function (req: Request, res: Response) {
//   const user = await myDataSource.getRepository(User).findOneBy({
//     id: req.params.id,
//   });
//   myDataSource.getRepository(User).merge(user, req.body);
//   const results = await myDataSource.getRepository(User).save(user);
//   return res.send(results);
// });

// app.delete("/users/:id", async function (req: Request, res: Response) {
//   const results = await myDataSource.getRepository(User).delete(req.params.id);
//   return res.send(results);
// });

app.listen(3000, () => console.log("server is running on port 3000"));
