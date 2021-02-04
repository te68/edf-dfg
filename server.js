const express = require('express')
const app = express();
const auth = require('./middleware/auth')
const connectDB = require('./config/db')


//Connect DB
connectDB();
//Init Middlware
app.use(express.json({extended:false}))

app.get('/',auth,(req, res) => {
    res.send("Hello world")
})




const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`App running on port ${PORT}`))