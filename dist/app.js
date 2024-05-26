"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notfound_1 = __importDefault(require("./app/midleware/notfound"));
const router_ts_1 = __importDefault(require("./app/router.ts"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/v1/', router_ts_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(notfound_1.default);
exports.default = app;
