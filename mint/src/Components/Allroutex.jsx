import { useState } from "react"
import { Routes,Route, useLocation } from "react-router-dom";
import { Home } from "../Pages/Home"
import { Signin } from "../Pages/Signin";
import { Navbar } from "./Navbar"
import { Sidenav } from "./sidenav"
import { Sidestil } from "./sidestill"


export const Allroutes=()=>{
    const[style,setStyle]=useState({})
    const[show,setshow]=useState(false)
    const [data,setData]=useState("")
    const [signnav,setsignav]=useState(false)
    let location=useLocation()
    // console.log(location.pathname=="/signin","answer",location)
     function sidenav(){
    
        setshow(true)
     }
     function sidenavfalse(){
             
        setshow(false)
     }
     function click(data){
       setData(data)
     }
   
    
    return (
        <div>
            {location.pathname=="/signin"?null:<Navbar onClick={sidenav} /> }
            {location.pathname=="/signin"?null: <Sidenav onClick={sidenavfalse}  show={show}/>}
           {location.pathname=="/signin"?null: <Sidestil onClick={click} />}
            <Routes>
                <Route path="/" element={<Home prop="us"/>}/>
                <Route path="/latest" element={<Home prop="in"/>}/>
                <Route path="/markets" element={<Home prop="markets"/>}/>
                <Route path="/recommended-for-you" element={<Home prop="for"/>}/>
                <Route path="/signin" element={< Signin  />} />
            </Routes>
           
        </div>
    )
}