import { Schema } from 'mongoose';
import * as connections from '../config/connection';
import { ICurrencyModel } from '../interfaces/currencyInterface';

const CurrencySchema: Schema = new Schema({
    currency_name: String ,
    currency_base: String
}, {
    collection: 'currency',
    versionKey: false,
    timestamps: true
});

export default connections.db.model < ICurrencyModel >('CurrencyModel', CurrencySchema);
