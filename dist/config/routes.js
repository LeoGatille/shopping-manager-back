"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const nodes_controller_1 = require("../controllers/nodes.controller");
class Routes {
    constructor() {
        this.nodesController = new nodes_controller_1.NodesController();
    }
    routes(app) {
        app.route("/").get(this.nodesController.index);
        app.route("/nodes").get(this.nodesController.index);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map