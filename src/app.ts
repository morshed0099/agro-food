import express, { Application, Request, Response, Router } from 'express';
import cors from 'cors';
import notfound from './app/midleware/notfound';
import router from './app/router.ts';
import globalErrorHandeler from './app/midleware/globalErrorHandelar';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandeler);
app.use(notfound);
export default app;
