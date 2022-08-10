import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import {axiosInstance} from "../../config";



export default function Setting() {
const [file,setFile]= useState(null)
const [username,setUsername]= useState("")
const [email,setEmail]= useState("")
const [password,setPassword]= useState("")
const [success,setSuccess]= useState(false)

const { user } = useContext(Context);

    const controlSubmit = async(e)=>{
    e.preventDefault();
    const updateUser ={
     userId:user._id,
     username,
     email,
     password
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file",file)
      updateUser.profilePic = filename;
      try{
      await axiosInstance.post("/upload", data);
   
      }catch(err){
    }
    try{
    await axiosInstance.put("/users/" + user._id, updateUser);
    setSuccess(true);
    }catch(err){
    
    }
    }

  };
  

return (
<div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm"  onSubmit={controlSubmit} >
        <label>Profile Picture</label>
              <div className="settingsPP">
          {file && (
      
          <img
            src={URL.createObjectURL(file)}
            alt=""
          />
          )}


            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username}   onChange={e => setUsername(e.target.value)} name="name" />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} name="email" />
          <label>Password</label>
          <input type="password" placeholder={user.password} onChange={e => setPassword(e.target.value)} name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && ( 
          <span  style={{color:"green"}}>Profile has been updated.....</span>
          )}
        </form>
        
      </div>
      <Sidebar />
    </div>
    )
  }

