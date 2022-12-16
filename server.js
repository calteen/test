const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('o!')
})

app.listen(300,()=>{
    console.log('listening on 300')
});