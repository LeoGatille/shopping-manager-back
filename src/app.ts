import { ListRouter } from './entity/list/listRouter';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './config/routes';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public router = express.Router();
    public lsRouter = new ListRouter();
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.lsRouter.routes(this.app);
        // this.router.use('/lists', ListRouter.route)
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().app;
