const app=require("./app");
const config=require("./config/index");

const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log(PORT);
    console.log('server running on'.PORT);
});