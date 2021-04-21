import express from 'express';
import path from 'path';
const app = express();

/** middleware setup */
import { setUpMiddleware } from './middleware/index';
setUpMiddleware(app);

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client'));
app.use('/', express.static(path.join(__dirname, 'client')));

/** router setup */
import { mainRouter } from './routes/index';
app.use(mainRouter());

app.listen(port);
console.log('listen on port ' + port);
