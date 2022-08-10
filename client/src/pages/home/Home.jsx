import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import {axiosInstance} from "../../config"
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts]= useState([]);

  const {search} = useLocation();
 

  useEffect(()=>{
   const fetchpost = async()=>{
   const res = await axiosInstance.get("/posts"+search)
   setPosts(res.data)
   }
   fetchpost()
  },[search])
  return (
    <>
    <Header/>
    <div className='home'>
      
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  )
}
