"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// import { migration } from './migration'
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`I listen on ${PORT}`);
});
// const toto = migration();
//# sourceMappingURL=server.js.map