import {axiosInstance} from '../../config'
import { useState } from 'react'
import './register.css'
import {Link} from "react-router-dom"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")
  const [admin, setAdmin] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (f)=>{
   f.preventDefault();
   setError(false);
   try{
    const res = await axiosInstance.post("/auths/register",{
      username,
      email,
      admin,
      password
      
    });
    res.data && window.location.replace("/login");
   }catch(err){
     setError(true);
   }
}

  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" onSubmit={handleSubmit}>

      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..."
      onChange={f=>setUsername(f.target.value)} />

      <label>Email</label>
      <input className="registerInput" type="email" placeholder="Enter your email..." 
      onChange={f=>setEmail(f.target.value)}/>

      <label>Admin</label>
      <input className="registerInput" type="password" placeholder="Enter your Admin password..."
      onChange={f=>setAdmin(f.target.value)} />

      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..."
      onChange={f=>setPasword(f.target.value)} />

      <button className="registerButton" type="submit">Register</button>
    </form>
      <button className="registerLoginButton" >
        <Link className="linkk" to="/login" >
        Login
        </Link>
     </button>
     {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
  </div>
  )
}
