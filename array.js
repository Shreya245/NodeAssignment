var http = require('http');
http.createServer(function (req, res)
{
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.write("sorted array is "+" "+arr);
   res.end();
}).listen(8081);


function sortArray()
{
    arr.sort();
    
}

var arr = [1,9,2,8,7,3,6];
sortArray();
console.log("Server is running on port"+" "+8081);
console.log(arr);
