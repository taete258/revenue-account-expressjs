import express, { NextFunction, Request, Response } from "express";
import { query } from "../utils/db";

const router = express.Router();

/* GET all users listing. */
router.get('/getAllUser', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rows } = await query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
