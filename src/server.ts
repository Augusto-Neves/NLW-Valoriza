import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3030, () => {
    console.log('🚀 Server is running on port 3030 🚀');
});
