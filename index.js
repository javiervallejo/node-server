const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('nada');
    res.end();
});

app.listen(3000, () => {
    console.log('server up 3000');
});