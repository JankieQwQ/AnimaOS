const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/compute' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            handleComputeRequest(body, res);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('200');
    }
});

function handleComputeRequest(body, res) {
    const script = querystring.parse(body).script;
    let result;
    try {
        result = eval(script);
        sendResponse(res, 200, result.toString());
    } catch (err) {
        sendResponse(res, 400, `Error: ${err.message}`);
    }
}

function sendResponse(res, statusCode, message) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(message);
}

server.listen(3000);