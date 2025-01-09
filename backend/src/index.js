import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import config from './config.js';
import connectDb from './database.js';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(router);

connectDb(config.mongoUrl);

app.listen(config.port, () => {
  console.info(`Node Server Running In ${config.devMode}`);
});
