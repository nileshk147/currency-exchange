// production config

export const envConfig: any = {
    database: {
        MONGODB_URI: 'mongodb://production_uri/',
        MONGODB_DB_MAIN: 'my_currency_exchange_prod'
    },
    JWT_SECRET: 'production-secret_key'
};
