import * as express from 'express';

import DB from '../services/db';

export default (req: express.Request, res: express.Response) => {
    const dbService = new DB();

    dbService.createTestData()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throw err;
        });
};
