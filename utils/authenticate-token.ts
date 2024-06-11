import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const authenticateToken = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({
    message: 'Unauthorized',
});

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any) => {
    if (err) {
      return  res.status(403).json({
        message: 'Invalid token',
    });
    }
    next()
  })
}