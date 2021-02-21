import { Document } from 'mongoose';

export interface ICurrencyModel extends Document {
    currency_name: string;
    currency_base: string;

}
