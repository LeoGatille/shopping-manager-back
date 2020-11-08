import { Test } from './models/test.model';
import app from './app';
import { migration } from './migration'
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`I listen on ${PORT}`)
});
const toto = migration();