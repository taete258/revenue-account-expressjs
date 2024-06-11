import express, { Express } from "express";
import dotenv from "dotenv";
import { authenticateToken } from "../utils/authenticate-token";
import errorHandler from 'strong-error-handler'
 
dotenv.config();

const index = require ("../routes/index");
const users = require('../routes/users');


// plugin
const bodyParser = require('body-parser')

// initialize the app with express
const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authenticateToken)
app.use(errorHandler());
app.listen(port, async() => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// routers
app.use('/', index);
app.use("/users",users)

