import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';
import db from './src/configs/dbconfig.js';

const app = express();
const PORT = process.env.port;

app.use(bodyParser.json());
app.use('/v1', router);
app.use('/images', express.static('./images'))

db.sync({force:true}).then( () => {
    console.log(`Connected to db`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
