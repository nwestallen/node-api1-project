const server = require('./api/server.js');

const port = 5000;

server.listen(port, () => {
    console.log(`listening on ${port}`);
});

// START YOUR SERVER HERE
