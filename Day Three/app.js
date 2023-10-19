const express = require("express")
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./Model/userSchema")
const PORT = 5000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/createuser", async (request, response) => {
  try {
    console.log(request.body);
    const body = request.body;

    const objToSend = {
      name: body.name,
      age: body.age,
      gender: body.gender,
    };
    const data = await UserModel.create(objToSend);
    response.json({
      message: "User successfully created",
      status: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
    response.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

app.get("/api/getuser", async (req, res) => {
  try {
    const userRecords = await UserModel.find({});
    console.log(userRecords);
    res.json({
      message: "data get",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

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