import { ListRouter } from './entity/list/listRouter';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './config/routes';

class App {
    public app: express.Application;
    public listRouter = new ListRouter();
    constructor() {
        this.app = express();
        this.config();
        this.listRouter.routes(this.app);
    }
    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().app;
