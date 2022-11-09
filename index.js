const express=require("express")

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Assignment second</h1>")
    res.end()
    
})
app.get('/api', (req,res)=>{
    res.send(`<h2>Here  is  api route</h2>`)
    res.end();
})
app.get("/main",(req,res)=>{
    res.send("<h1> Here is main route </h1>")
    res.end()
})
app.listen(3000,()=>{
    console.log('connected to 3000')
})