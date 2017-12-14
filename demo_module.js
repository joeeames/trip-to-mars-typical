var http = require('http');
var url = require('url');
var dt = require('./myfirstmodule');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;

        res.write(txt);
        res.write(req.url);
        res.write('Hello World!');
        res.write("The date and time are currently: " + dt.myDateTime());
        res.end();
        // res.end();
    });

    // res.writeHead(200, {'Content-Type': 'text/html'});


}).listen(8080);

