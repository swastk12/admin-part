
const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res) => {
  try {
  

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const admins = req.body.admin

    const code = "cigeratecode"
    if( admins === code ){
      hashedPass.isAdmin = true;

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      isAdmin:req.body.admin,
      password: hashedPass ,
    
    });
    
    const user = await newUser.save();
    res.status(200).json(user);
    }
  } catch (err) {
 
  }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const{password , ...others} = user._doc;
      res.status(200).json(others);
    } catch (err) {
    
    }
  });
  


module.exports = router;