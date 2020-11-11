"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listRouter_1 = require("./entity/list/listRouter");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./config/routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.router = express.Router();
        this.lsRouter = new listRouter_1.ListRouter();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.lsRouter.routes(this.app);
        // this.router.use('/lists', ListRouter.route)
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map