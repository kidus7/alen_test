import express from 'express';
import ErrorMiddleware from './middleware/index.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config()

const port = 3000

app.use(express.json())
app.use(ErrorMiddleware)

app.listen(port, () => console.log(`Server is listening on port ${port}!`))