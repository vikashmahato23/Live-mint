import "./sidestill.css";
import { useNavigate, useSearchParams,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const Sidestil=(click)=>{
  let location = useLocation();
  console.log(location.pathname)
  const navigate=useNavigate()
  const[view,setview] =useState({})
  const[style,setStyle]=useState({})
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (0 < window.scrollY) {
     
      setStyle({...{ top: "54px"
    

    
    }})
      
    } else if (0==window.scrollY) {
          setStyle({...{top:"72px"}})
    }
    
    };
  
  

useEffect(()=>{
  window.addEventListener("scroll", (e) => handleNavigation(e))
  if(location.pathname=="/"){
    setview({...{orange:"rgba(255, 166, 0, 0.558)",
                   white:"white" ,
                     white1:"white",
                    white2:"white"                }})
  }
  else if(location.pathname=="/latest"){
    setview({...{orange:"white",
    white:"rgba(255, 166, 0, 0.558)" ,
      white1:"white",
     white2:"white"                }})
  }
  else if(location.pathname=="/markets"){
    setview({...{orange:"white",
    white:"white" ,
      white1:"rgba(255, 166, 0, 0.558)",
      white2:"white"          
          }})

     }
     else if(location.pathname=="/recommended-for-you"){
      setview({...{orange:"white",
      white:"white" ,
        white1:"white",
        white2:"rgba(255, 166, 0, 0.558)"                }})
     }
  
  
},[location]);


    return(
        <div className="stilnav" style={{top:style.top,transition:"top 0.5s"}}>
          <div className="stilsidebar">
            <div className="four"  onClick={()=>{
           
            }}>
            <div style={{backgroundColor:view.orange }}onClick={()=>{
            
              navigate("/")
              
              
            }}><p>Home</p></div>
            <div style={{backgroundColor:view.white }} onClick={()=>{
            
              navigate("/latest")
              
              
            }}><p>Latest</p></div>
            <div style={{backgroundColor:view.white1 }} onClick={()=>{
            
              navigate("/markets")
              
              
            }}><p>Markets</p></div>
            <div style={{backgroundColor:view.white2}} onClick={()=>{
              navigate("/recommended-for-you")
            }}><p>For You</p></div>
            </div>
            <div className="seven">
            <div><p>Market Dashboard</p></div>
            <div><p>Mint SnapView</p></div>
            <div><p>Plain Facts</p></div>
            <div><p>Long Strory</p></div>
            <div><p>Mark To Maket</p></div>
            <div><p>Primer</p></div>
            <div><p>Videos</p></div>
            <div><p>Money</p></div>
            <div><p>Start-ups</p></div>
            <div><p>News</p></div>
            <div><p>Mutual Funds</p></div>
            <div><p>Cryptocurrency</p></div>
            <div><p>Markets</p></div>
            <div><p>Banking</p></div>
            <div><p>Coronavirus</p></div>
            <div><p>Technology</p></div>
            <div><p>Podcasts</p></div>
 
            </div>
          </div>
            
         
         </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
            )
}