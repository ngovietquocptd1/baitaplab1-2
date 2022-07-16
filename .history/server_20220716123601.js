const app=require("./app");
const config=require("./config/index");

const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log("server port 3000 running on port");
});