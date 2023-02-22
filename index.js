import express from 'express';
import ErrorMiddleware from './middleware/index.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config()

const port = 3000

app.use(express.json())

app.get('/', (req, res, next) => { 
    try {
        const user = req.body.user;
        if (!user) { 
            res.status(404).send({ status: 404, message: 'User Not Found' });
            // throw new Error("User not found")
        }
    } catch (error) { 
        return next(error);
    }
})
app.use(ErrorMiddleware)

app.listen(port, () => console.log(`${process.env.NODE_ENV.toUpperCase()} Server is listening on port ${port}!`))