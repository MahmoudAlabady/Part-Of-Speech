const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3010

var cors = require('cors')
const rankRouter = require('./routers/rank');
const wordsRouter = require('./routers/words');
const bcrypt= require('bcryptjs');
var jwt = require('jsonwebtoken');
const multer = require('multer')
//connect db
// require('./db/mongoose');

app.use(express.json())
app.use(cors())
app.use('/api/rank',rankRouter);
app.use('/api/wordsList',wordsRouter);



app.listen(port,()=>{console.log('Server is running',port)})