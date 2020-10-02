const express = require('express');
const expressRouter = require('./routers/express-router');
const welcomeRouter = require('./routers/welcome-router');

const server = express();
const port = 8080;

server.use(express.json());
server.use(welcomeRouter);

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})