const express=require("express");
const https=require("https");
const bodyParser=require(body-parser);  
 
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
   res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res)
{
    console.log( req.body.cityName);
   
const query ="req.body.cityName"
const apiKey="dbeafb14ebf548bcb3e151358220411"
const url ="http://api.weatherapi.com/v1/current.json?key=" + apiKey +"&q=" + query + "&aqi=no";
    



https.get(url,function(response){
        console.log(response.statusCode);

     response.on("data",function(data)
     {
        const weatherdata =JSON.parse(data)
        console.log(weatherdata);
        const temp=weatherdata.main.temp;
        const weatherDescription =weatherdata.weather[0].weatherDescription
        const icon =weatherdata.weather[0].icon
        imageURL="http:??image" +icon +"@2x.png"
        res.write("<p>the weather is"+weatherDescription +"<p>");
        res.write("<h1>the temperature is london is "+temp+"degree celcius.<h1>");
        res.write("<img src=" +imageURL +">");
     })
    })


        res.send("server is up and running"); 
    })

 app.listen(3000,function()
 {
    console.log("server is working");
});
