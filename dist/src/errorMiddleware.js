"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res) => {
    console.error(res.status(500).json({ error: 'an error occurred' }), "errors -----");
    // res.status(500).json({ error: 'Internal Server Error' });
};
module.exports = errorHandler;
