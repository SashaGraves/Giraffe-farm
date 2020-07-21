const express = require('express');
const app = express();
const cors = require('cors');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('port') || 3000;

app.use(express.json({ extended: true }));

app.use(cors({
    "origin": 'http://localhost:4343',
    "allowedHeaders": '*',
    "methods": 'GET,POST,PUT,DELETE,OPTIONS',
    "preflightContinue": true
}));

app.use('/api', require('./routes/index'));


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (e) {
        console.log('server error', e.message);
        process.exit(1);
    }
};

start();

app.listen(PORT, function () {
    console.log(`example app listening on port ${PORT}`)
});
