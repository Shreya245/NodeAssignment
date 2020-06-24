module.exports = 
{
    value : (req, res) => 
    {
      var arr = req.body;
      var xyz = arr.filter(function (xArray)
{
    return xArray.name ==='xyz';   
   
})

       var index = arr.findIndex((obj => obj.name == "xyz"));
       arr[index].info.email = "shreya@mail.com";
       res.send(xyz);
    }
}