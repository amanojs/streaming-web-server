import {Express} from 'express'
import helmet from 'helmet';
import cors from 'cors';
const bodyParser  = require('body-parser');

export const setUpMiddleware = (app: Express) => {
    app.use(helmet({
        contentSecurityPolicy: false
    }));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}