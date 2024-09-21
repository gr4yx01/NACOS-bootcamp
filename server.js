import express from 'express';
import userRouter from './router/user.js'

const app = express();

app.use((req, res, next) => {
    console.log('Application middleware');
    next();
})

app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})