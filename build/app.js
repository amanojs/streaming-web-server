"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const index_1 = require("./middleware/index");
index_1.setUpMiddleware(app);
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '..', 'client'));
app.use('/', express_1.default.static(path_1.default.join(__dirname, '..', 'client')));
const index_2 = require("./routes/index");
app.use(index_2.mainRouter());
app.listen(port);
console.log('listen on port ' + port);
