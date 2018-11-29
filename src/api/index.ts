import * as express from 'express';

import controllers from './controllers';
const config = require('./config.json');

const app = express();

app.get('/', (req, res) => res.send('API is running::'));

app.get('/test', (req, res) => {
    console.log(controllers, controllers.test);
    controllers.test(req, res);
});

app.listen(config.port, () => console.log(`API running at localhost://${config.port}`));
