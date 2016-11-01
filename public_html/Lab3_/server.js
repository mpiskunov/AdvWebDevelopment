var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {

    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1);

    switch(fileName){
            case 'index':
                fileSystem.readFile("index.html" , cbIndex);
                break;
            case 'todo':
                fileSystem.readFile("todo.json" , cbTODO);
                break;
            default:
                fileSystem.readFile(fileName , cbIndex);
                break;
    }

    function cbIndex(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html
             */
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {
            /* Send the HTTP header
             * HTTP Status: 200 : OK
             * Content Type: text/html
             */
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        /* the response is complete */
        response.end();
    }

    function cbTODO(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html
             */
            response.writeHead(400, {'Content-Type': 'text/html'});
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {
            /* Send the HTTP header
             * HTTP Status: 200 : OK
             * Content Type: text/html
             */
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(data);
        }

        /* the response is complete */
        response.end();
    }
    
}).listen(3000);
console.log('Server running at http://localhost:3000/index.html');