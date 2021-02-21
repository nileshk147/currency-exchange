import * as express from 'express';
import CurrencyController from '../controllers/currencyController';

/**
 * @class CurrencyRouter
 */
export default class CurrencyRouter {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/get_currency', CurrencyController.getCurrencyList);
    }
}
