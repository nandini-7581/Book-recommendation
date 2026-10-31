import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.use(express.static('public'));
app.set('view engine','ejs');
const API_KEY='';
    
app.get('/',async(req,res)=>{
    try{
        const query='fiction';
        const maxResults=40;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;
        const response=await axios.get(url);
        const books=response.data.items;
        res.render('index.ejs',{books});

    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});