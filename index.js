import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';
import db from './src/configs/dbconfig.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/v1', router);
app.use('/images', express.static('./images'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
db.sync().then( () => {
    console.log(`Connected to db`);
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
