const express = require("express")
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;


const DB_URI = `mongodb+srv://ayansheikh:ayansheikh@cluster0.bxwdrui.mongodb.net/`;
mongoose.connect(DB_URI);



mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

app.get("/", (req , res)=>{
  res.json({
    message: "server up"
  })
})

app.listen(PORT,()=>{
  console.log(`server is runnig on http://localhost:${PORT}`)
})