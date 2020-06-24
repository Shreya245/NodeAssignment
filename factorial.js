const express = require('express')
const factorial = express()

factorial.get('/', function(req, res)
{
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
console.log(factorial(6));
res.send("factorial is"+"  "+factorial(6));
})

factorial.listen(3001, () => 
{
    console.log("server is running on port", 3001)
})


