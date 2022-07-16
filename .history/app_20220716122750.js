const express =require("express");
const cors = require("cors");

const app =express();

app.use(cors);// nhan du lieu json
app.use(express.json());// json gui du lieu ve
// dinh nghi route dau
app.get("/",(req,res)=>{
    res.json({message:"Xin Chao ban den ung dung quan ly danh ba!"});
})