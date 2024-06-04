"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.POSTGRES_URL,
});
pool.connect((callback) => {
    console.log(callback);
});
module.exports = {
    query: (text, params) => pool.query(text, params),
};
