import { useEffect, useState } from "react";
import "./sidnav.css"

export const Sidenav=(navshow) =>{


  const[style,setStyle]=useState({})
 
  const[show,setshow]=useState(false)
 useEffect(()=>{
  if(navshow.show==true){
      setshow(true)
    setStyle({...{left:"0px"}})
  }
 },[navshow.show])

  const closenav=()=>{

    
      setStyle({...{left:"-250px"}})
      setshow(false)
      navshow.onClick()   
  }
    return (
   
          <div className="sidenav">
           
                <div style={{left:`${style.left}`, transition:"left 0.5s"}} className="sidebar">
                  <div className="mything">
                    <div className="noti"><div className="one same"></div><div className="two"><p>subscription</p></div></div>
                    <div className="noti"><div className="myreads same"></div><div className="two"><p>myreads</p></div></div>
                    <div className="noti"><div className="epapertwo same"></div><div className="two"><p>e-Paper</p></div></div>
                    <div className="noti"><div className="gahnti same"></div><div className="two"><p>Notification</p></div></div>
                    <div className="noti"><div className="newsletters same"></div><div className="two"><p>Newsletters</p></div></div>

                  </div>
                </div>
               {show?<div  className="opcity" onClick={closenav}></div>:null}
          </div>
    );
  }