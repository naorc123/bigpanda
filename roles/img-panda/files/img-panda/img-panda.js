var http = require('http');
var config = require('./img-config.json');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
var fs = require('fs');
//call to another function called router that all she does is to
var routes = require('./routes/router');

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
// function that every time we go to localhost:8080/img-panda will return a random image from /root/resources
dispatcher.onGet("/img-panda",function(req, res){
{
    var img_path = routes.GetRandomImage();
    var img = fs.readFileSync(img_path);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img, 'binary');
}
})

dispatcher.onError(function(req, res) {
        res.writeHead(404);
        res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
  
