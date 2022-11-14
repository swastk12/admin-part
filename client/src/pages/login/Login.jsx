import {axiosInstance} from '../../config';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import './login.css'
import {Link} from "react-router-dom"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {  dispatch,isFetching } = useContext(Context
)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
     const res = await axiosInstance.post("/auths/login",{
      username: userRef.current.value,
      password: passwordRef.current.value,
})
   dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FALURE"});
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onChange={handleSubmit}>
        <label>username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." 
         ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."
        ref={passwordRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
        <Link className="linku" to="/register" >
        Register
        </Link>
         </button>
    </div>
  )
}
