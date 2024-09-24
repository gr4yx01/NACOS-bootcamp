import express from 'express';
import userRouter from './router/user.js'
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    format: format.combine(
      format.splat(),
      format.simple()
    ),
    transports: [new transports.Console()]
  });

  logger.log('error', 'test message %s', 'my string');
  logger.info("127.0.0.1 - there's no place like home");
  logger.error("127.0.0.1 - there's no place like home");

const app = express();

app.use((req, res, next) => {
    console.log('Application middleware');
    next();
})

app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})