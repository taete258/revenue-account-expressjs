import express, { Express, Request, Response } from "express";
const errorHandler = require('strong-error-handler');
const index = require ("../routes/index");
const users = require('../routes/users');

// plugin
const bodyParser = require('body-parser')

// initialize the app with express
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler());
app.listen(port, async() => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// routers
app.use('/', index);
app.use("/users",users)

