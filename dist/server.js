"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const migration_1 = require("./migration");
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`I listen on ${PORT}`);
});
const toto = migration_1.migration();
//# sourceMappingURL=server.js.map