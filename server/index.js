const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { UserInteractions } = require('./Users');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/Users', UserInteractions);

const server = app.listen(3001, () => {
    console.log('Server Running.')
})