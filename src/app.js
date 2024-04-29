"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var datasource_1 = require("./db/repositories/datasource");
var cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// establish database connection
datasource_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", userRoutes_1.default);
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
app.listen(3000, function () { return console.log("server is running on port 3000"); });
