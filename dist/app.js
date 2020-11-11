"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listRouter_1 = require("./entity/list/listRouter");
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.listRouter = new listRouter_1.ListRouter();
        this.app = express();
        this.config();
        this.listRouter.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map