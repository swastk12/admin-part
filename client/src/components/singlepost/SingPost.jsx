import {axiosInstance} from "../../config";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import "./singpost.css"
import {Link} from "react-router-dom" 
import { Context } from "../../context/Context";

export default function SingPost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setpost] =useState({})
  const PF = "http://15.207.197.246:80/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMod, setUpdateMod] = useState(false)



  useEffect(()=>{
 const getPost = async ()=>{
   const res = await axiosInstance.get("/posts/" + path);
   setpost(res.data);
   setTitle(res.data.title)
   setDesc(res.data.desc)
 }
 getPost()
  },[path])

  const handleDelete = async ()=>{
  try{
    await  axiosInstance.delete(`/posts/${post._id}`,{data:{username: user.username}});
    window.location.replace("/")
  }catch(err){
}
};

const handleUpdate = async ()=>{
  try{
    await  axiosInstance.put(`/posts/${post._id}`,{username: user.username, title, desc});

    setUpdateMod(false)
  }catch(err){

  }
}

  return (
    <div className="singlePost">
          <div className="singlePostWrapper">
            
            {post.photo && (
      <img className="singlePostImg"
      src ={ PF + post.photo}
      alt =""/>
      )}{
        updateMod ? <input type="text" value={title} 
        onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput" autoFocus /> :(
          <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username &&(
         <div className="singlePostEdit">
         <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMod(true)}></i>
         <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
       </div>
        )}
      </h1>

      )
      }


        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
            <Link to = {`/?user=${post.usrname}`} className="links">  
            <b>{post.username} </b>
            </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMod ? ( <textarea className="singlePostDescInput" value={desc}
         onChange={(e) => setDesc(e.target.value)}
        autoFocus/>):(
          <p className="singlePostDesc">
          {desc}
          </p>
        )}
        {updateMod && 
         <button className="singlePostButton" onClick={handleUpdate}> Update </button>
        }
     
      </div>
    </div>
  )
}
