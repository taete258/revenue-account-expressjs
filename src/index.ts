import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + test11");
});

app.get("/data", (req: Request, res: Response) => {
    console.log(req.query)
    res.send(req.query);
  });

  app.get("/params/:id", (req: Request, res: Response) => {
    console.log(req.params)
    res.send(req.params);
  });


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});