const express=require("express");
const https=require("https");
 
const app =express();
app.get("/",function(req,res)
{    const url =" https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=30e5ea2a0337b52e0ae839da39cb50b6";
    
https.get(url,function(response){
        console.log(response.statusCode);

     response.on("data",function(data)
     {
        const weatherdata =JSON.parse(data)
        console.log(weatherdata);
     })
    })


        res.send("server is up and running"); 
    })

 app.listen(3000,function()
 {
    console.log("server is working");
});
