"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/getAllUser', (req, res, next) => {
    try {
        // Some code that might throw an error
        // throw new Error('Example error');
        res.status(200).end();
        // query("SELECT * FROM users").then((result)=>{
        //   console.log(result.rows)
        //   // res.send(result.rows);
        // }) 
    }
    catch (error) {
        // Pass the error to Express error handler middleware
        next(error);
    }
    // res.send('respond with a resource');
});
module.exports = router;
