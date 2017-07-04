var http = require('http');
var config = require('./smart-config.json');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
var PostCount=0;

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

// function that return POST request every time we do GET request.
dispatcher.onGet("/smart-panda", function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello!\n');
            res.write('We have had ' + PostCount + ' POST COUNT!\n');
            res.end();
});

// function that count every POST request, add them to PostCount.
dispatcher.onPost("/smart-panda", function() {
        PostCount++;
    });

dispatcher.onError(function(req, res) {
        res.writeHead(404);
        res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
