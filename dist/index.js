"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const postgres_1 = require("@vercel/postgres");
const bodyParser = require('body-parser');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server + test11");
// });
// app.get("/data", (req: Request, res: Response) => {
//     console.log(req.query)
//     res.send(req.query);
//   });
//   app.get("/params/:id", (req: Request, res: Response) => {
//     console.log(req.params)
//     res.send(req.params);
//   });
// catch 404 and forward to error handler
app.use(function (res) {
    res.status(404).json({
        message: "No such route exists"
    });
});
// error handler
app.use((err, req, res) => {
    err.name === 'Error' && res.status(500).json({
        err
    });
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    console.log(yield postgres_1.sql.connect());
}));
