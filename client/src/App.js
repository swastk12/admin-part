import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single"

import {BrowserRouter as Router,  Routes, Route,  } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
   const {user}= useContext(Context) ;
  return (

    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> :  <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/setting" element={user ? <Setting /> : <Register /> } />
        <Route path="/write"element={user ? <Write /> : <Login />}/>
        <Route path="/post/:postId" element={user ? <Single />: <Login />} /> 
       </Routes>
   
  </Router>



  );
}

export default App;
