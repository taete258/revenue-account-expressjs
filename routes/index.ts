import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

/* GET home page. */
router.get('/', (req:Request, res:Response, next:NextFunction) =>{
  res.send("Revenue Account Api created by Ratchanon Pheungta. (☝ ՞ਊ ՞)☝").status(300);
});

module.exports = router;
