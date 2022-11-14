import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css"

const  TopBar=()=> {
  const {user, dispatch}= useContext(Context) ;

    const controllLogout = ()=>{
      dispatch({type:"LOGOUT"});
    }

  return (
<>
<div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
    <img src="/images/TEA LOGO FINAL.png" class="logo"/>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="nav-links">
    <a href="/" target="_blank">HOME</a>
    {user &&<a href="/write" target="_blank">WRITE</a>}

    {user &&<a href="/" target="_blank" onClick={controllLogout}  >LOGOUT</a>}
    {user ? (
    <a href="/setting" target="_blank">PROFILE</a>
    ) : (
    <>  
    <a href="/register" target="_blank">ADMIN REGISTER</a>
    <a href="/login" target="_blank">ADMIN LOGIN</a>
     </>
    )}
    
  
  </div>
</div>
</>
  )
}

export default TopBar

