import * as express from 'express';
import CurrencyModel from '../models/currencyModel';
import { seedData } from '../config/seedData';
import { Messages } from '../util/message';
import { ICurrencyModel } from '../interfaces/currencyInterface';

class CurrencyController {
    constructor() {
        /**
        * @description Insert currency if it does not exist.
        */

       (async()=> {
        const existingCurrency = <ICurrencyModel[]> await CurrencyModel.find().lean().exec();
        if(!existingCurrency.length){
               const result =  await CurrencyModel.insertMany(seedData.data);
        }

    })();

    }

    /**
     * @description  Used to fetch the currency list from the database.
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */

    public async getCurrencyList(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {

        try {
        
            const currency_data =  <ICurrencyModel[]> await CurrencyModel.find().lean().exec();
            if(currency_data.length){
                return res.status(200).json({...Messages.CURRENCY_LIST, data: currency_data});
            }else{
                const result = await CurrencyModel.insertMany(seedData.data);
                if(result.length){
                    return res.status(200).json({...Messages.CURRENCY_LIST, data: currency_data});
                }else{
                     res.status(400).json(Messages.ANONYMOUS)
                }
            }

        }  catch (error) {
            next();
            return res.status(500).json({ message:error.message || Messages.ERROR_500 });
        }
    }
}

export default new CurrencyController();
