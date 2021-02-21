import * as express from 'express';
import CurrencyRouter from './currency';
import { IServer } from '../interfaces/serverInterface';

export default class Routes {

    /**
     * @param  {IServer} server
     * @returns void
     */

    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.use('/', router);
        // api
        server.app.use('/api/currency', new CurrencyRouter().router);
        server.app.use((error, req, res, next) => {
            res.status(500).json({
                message: error.message
            });
        });

    }
}
