const express =require("express");
const cors = require("cors");
const contactRouter = require("./routes/contact.route");

const app =express(); // dinh nghia app

app.use(cors);// nhan du lieu json
app.use(express.json());// json gui du lieu ve
// dinh nghi route dau
app.get("/",(req,res)=>{
    res.json({message:"Xin Chao ban den ung dung quan ly danh ba!"});
});

//export app ra
module.exports=app;