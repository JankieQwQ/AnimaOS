const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
    if (req.url === '/compute' && req.method === 'POST') {
        let body = '';
            req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const script = querystring.parse(body).script;
            let result;
            try {
                result = eval(script);
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end(`Error: ${err.message}`);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result.toString());
        });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
}).listen(3000);

