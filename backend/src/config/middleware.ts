import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { IServer } from '../interfaces/serverInterface';

export default class Middleware {
    static init(server: IServer): void {

        // express middleware
        server.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        server.app.use(bodyParser.json({ limit: '50mb' }));
        server.app.use(cookieParser());
        server.app.use(compression());
        server.app.use(helmet());
        server.app.use(morgan('tiny'));

        // cors
        server.app.use(cors());
        server.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With,' +
                ' Content-Type, Accept,' +
                ' Authorization,' +
                ' Access-Control-Allow-Origin,' +
                ' Access-Control-Allow-Credentials'
            );
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}
