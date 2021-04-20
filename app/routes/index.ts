import express from 'express';
import { TestService } from '../services/test';
const path = require('path');

const router = express.Router();

export const mainRouter = () => {
    router.get('*', (req,res) => {
        const service = new TestService();
        service.test().then((result)=>{
            res.status(200).render('index');
        }).catch((err) => {
            res.status(404).send('no data.')
        });
    });
    return router;
}
