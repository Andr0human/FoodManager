import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes.js';
import connectDb from './database.js';
import config from './config.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(router);

connectDb(config.mongoUrl);

app.listen(config.port, () => {
  console.info(`Node Server Running In ${config.devMode}`);
});
