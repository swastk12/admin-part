import {axiosInstance} from '../../config'
import { useEffect, useState } from 'react'
import './sidebar.css' 


export default function Sidebar() {
  const [cats , setCats] = useState([])

  useEffect(()=>{
    const getcats = async ()=>
    {
      const res = await axiosInstance.get("/categorys")
      setCats(res.data)
    }
    getcats()
  },[])


  return (
    <div className='Sidebar'>
          <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1537572263231-4314a30d444f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
          
            <li className="sidebarListItem">{c.name}</li>
       
          ))}
          
    
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
