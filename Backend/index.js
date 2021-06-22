const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
const config = require('./config')
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
const codeSchema = require('./CodeSchema');

(async () => {
    try{
        await mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    }
    catch (e){
        throw e;
    }
})();

app.post('/sender', (req,res) =>{
    const randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    const data = {
        code: randomNumber,
        text: req.body.text,
        textReceived: false,
    }
    let newText = new codeSchema(data)
    newText.save(err => {
        if(err) res.status(400).json(err)
    })
    res.status(200).json({code: randomNumber})
    
})

app.post('/receiver', (req,res) => {
    codeSchema.findOneAndDelete({code: req.body.code}, (err, Stext) => {
        if(err){
            return res.json({text: "failed to find the text"})
        }
        return res.status(200).json({text: Stext.text});
    })
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})

