const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

// initialize object
const myEmitter = new Emitter();

// Port
const PORT = process.env.PORT || 4500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // let filePath;

    // if (req.url === '/' || req.url === 'index.html') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     filePath = path.join(__dirname, 'index.html');
    //     fs.readFile(filePath, 'utf8', (err, data) => {
    //         res.end(data);
    //     });
    // }

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case 'jpg':
            contentType = 'image/jpeg';
            break;
        case 'png':
            contentType = 'image/png';
            break;
        case 'txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
            break;
    }

})

// Listen on port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// // event listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));

// // Emit event
// myEmitter.emit('log', 'Log event emitted');

