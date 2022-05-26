import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) =>{
    res.send('Welcome to Image Processing API :)');
});

app.listen(port, () => { 
    console.log(`server started at localhost ${port}`);
});