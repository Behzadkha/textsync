const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.post('/sender', (req,res) =>{
    console.log(req.body.text)
    res.status(200).json({code: "192"})
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})

