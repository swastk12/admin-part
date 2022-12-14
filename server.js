const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auths");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categorys");
const path = require("path");
const multer = require("multer");

const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/Admin/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });




app.use("/Admin/auths", authRoute);
app.use("/Admin/users", userRoute);
app.use("/Admin/posts", postRoute);
app.use("/Admin/categorys", categoryRoute);



  app.use(express.static(path.join(__dirname,"/client/build")))
  app.get("*",(req,res)=> { 
    res.sendFile(path.join(__dirname, '/client/build','index.html'))
  });


app.listen( PORT, ()=>{
console.log("backend connected server 5000")
})