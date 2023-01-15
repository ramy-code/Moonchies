import express from "express";
const app = express();
const PORT = 5000


app.post('/api', (req,res) => {
    res.json({ "lets": "go" })
    console.log('got a req', req.body);
})



app.listen(PORT,()=>(console.log('Listening on port: ' + PORT)))