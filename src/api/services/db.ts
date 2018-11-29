import * as mongoose from 'mongoose';
import testModel from '../schema/test';

const config = require('../config.json');

export default class DB {
    db: any;

    constructor () {
        mongoose.connect(config.mongodb, {useNewUrlParser: true})
            .catch(err => {
                throw err;
            });
        (<any> mongoose).Promise = global.Promise;
        this.db = mongoose.connection;

        this.db.on('error', () => console.error.bind(console, 'connection error:'));
        this.db.once('open', () => console.log('db connection open'));
    }

    createTestData = (): Promise<any> => {
        const newTest = new testModel({name: 'TEST'});

        return newTest.save();
    }
}
