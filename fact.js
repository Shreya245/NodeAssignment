
var http = require('http');
http.createServer(function (req, res)
{
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.write("factorial is "+" "+factorial(4));
  
   res.end();
}).listen(8179);

function factorial (f)
{
   if(f<0)
   {
      return -1;

   }
   else if(f==0)
   {
      return 1;
   }   
   else
   {
      return(f*factorial(f-1));
   }
}

console.log("Server is running on port"+" "+8179);
console.log(factorial(4));