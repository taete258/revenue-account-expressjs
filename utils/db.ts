import { Pool, QueryResult } from 'pg';
import dotenv from "dotenv";
dotenv.config();

const pool: Pool = new Pool(
    {
        user: process.env.DB_USERNAME,
        password:  process.env.DB_PASSWORD,
        host:  process.env.DB_HOST,
        port:  Number(process.env.DB_PORT),
        database:  process.env.DB_NAME,
    }
)
export const query = (text: string, params?: any[]): Promise<QueryResult> => {
  return pool.query(text, params);
}

        

