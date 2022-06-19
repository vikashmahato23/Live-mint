import "./sub.css"
import pay from "../Images/pay.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Subscribe=()=>{
 const navigate=useNavigate()
    return (
        <div>
               <header className="header">
                  <div className="con">
                    <a href="/" className="logosub">
                        <img src="https://images.livemint.com/dev/mint-logo-white.svg
" alt="" style={{width:"90px",height:"32px" }} />
                    </a>
                  </div>
                  <nav >
                            <a href="/lm/giftcard">Gift cards</a>
                            <a href="/institute">Corporate plan</a>
                            <a href="/student/lm/plan">Student Plan</a>
				</nav>
               </header>
               <div className="pay">
                <div className="textlogo">
                    <div><img src="https://images.livemint.com/static/livemint-logo-v2.svg" alt="" /></div>
                    <div><img src="https://images.livemint.com/static/livemint-logo-v2.svg" alt="" />
                         <p>THE WALL  STREET JOURNAL</p></div>

                      
                </div>
                <div className="month">
                            <input type="radio" />
                            <span><h2>2Years</h2></span>
                            <span><h2>213per/month</h2></span>
                         </div>
                <div className="month">
                            <input type="radio" />
                            <span><h2>1Year</h2></span>
                            <span><h2>246/month</h2></span>
                         </div>
                <div className="month">
                            <input type="radio" />
                            <span><h2>Half Year</h2></span>
                            <span><h2>246/month</h2></span>
                         </div>
                 <button className="month btn" onClick={()=>{
                      navigate("/checkout")
                 }
               } ><p>Start your trail</p></button>
               </div>
        </div>
    )
}