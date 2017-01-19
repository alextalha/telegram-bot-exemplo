var http = require('http');
var fs    = require('fs');



http.createServer(function(request,response){
    
    if(request.url == '/'){
        fs.readFile('index',function(){
            
        });
    
});
