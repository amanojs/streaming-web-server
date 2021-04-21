"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const Ogp_1 = __importDefault(require("../services/Ogp"));
const router = express_1.default.Router();
const mainRouter = () => {
    router.get('/room', (req, res) => {
        const ogp = new Ogp_1.default('invite');
        res.status(200).render('index', Object.assign({}, ogp));
    });
    router.get('/', (req, res) => {
        const ogp = new Ogp_1.default('default');
        res.status(200).render('index', Object.assign({}, ogp));
    });
    return router;
};
exports.mainRouter = mainRouter;
