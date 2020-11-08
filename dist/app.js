"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listRouter_1 = require("./entity/list/listRouter");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./config/routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/lists', listRouter_1.ListRouter);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map