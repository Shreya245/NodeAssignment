const express = require('express')
const arr = express()
const port = 8085

var array1 = [1,9,2,8,7,3,6];
arr.get('/', function(req, res)
{
function sortArray()
{
    array1.sort();
    console.log(array1);
}


sortArray();
res.send("sorted array is"+"  "+array1);
})

arr.listen(8085, () => 
{
    console.log("server is running on port", 8085)
})

