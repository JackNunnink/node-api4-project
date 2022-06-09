require('dotenv').config();

// console.log(process.env.PORT, process.env.NODE_ENV);

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n==> 🌎  API Server now listening on port ${PORT}!\n`);
});