import express from 'express';
import userRouter from './routers/user.js'

const app = express()

//middleware

app.use(express.json())

app.use(userRouter)

app.listen(4000, () => {
    console.log('Server currently working')
})