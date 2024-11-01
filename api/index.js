import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
<<<<<<< HEAD
import cookieParser from 'cookie-parser'    
=======
import cookieParser from 'cookie-parser'
>>>>>>> 4708a4b7c8368210dba10152f4c50325fc2915c2

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express ();

app.use(express.json());
app.use(cookieParser());

app.listen (3000, () => {
console.log('server is runing on port 3000!!');

})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'User not found';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});
