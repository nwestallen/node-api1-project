require('dotenv').config();
const path = require('path');
const server = require('./api/server.js');
const cors = require('cors');
const express = require('express');

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors());
}

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

// START YOUR SERVER HERE
