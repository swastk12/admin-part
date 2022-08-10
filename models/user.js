const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
        type:String,
        required:true
    },
      password: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
        default: "",
      },
    },
    { timestamps: true }
  );
  mongoose.models={};
  module.exports = mongoose.model("User", UserSchema);