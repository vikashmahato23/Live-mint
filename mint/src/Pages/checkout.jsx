import "./signin.css";
import FacebookAuth from 'react-facebook-auth';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useSelector ,useDispatch} from "react-redux";
import { Postuser } from "../Redux/action";
import { useNavigate } from "react-router-dom";
export const Checkout=()=>{
  
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
                     <input type="radio" name="pay" />
                     <span><h2>CREDIT/DEBIT </h2></span>
                     <span><img style={{width:"170px",marginRight:"10px"}} src="https://images.livemint.com/dev/cards.svg" alt="" /></span>
                  </div>
         <div className="month">
                     <input type="radio" name="pay" />
                     <span><h2>UPI</h2></span>
                     <span><img style={{width:"170px",marginRight:"10px"}}  src="https://images.livemint.com/dev/upi3.svg" alt="" /></span>
                  </div>
         <div className="month">
                     <input type="radio" name="pay" />
                     <span><h2>WALLET</h2></span>
                     <span><img src="https://images.livemint.com/dev/paytm.svg" alt="" /></span>
                  </div>
          <button className="month btn" onClick={()=>{
               navigate("/checkout")
          }  
        } ><p>Continue</p></button>
          <div style={{marginTop:"30px"}}> <a style={{marginLeft:"30%",marginTop:"30px"}} href="/subscribe">back to plan page</a></div>
        </div>
      
 </div>
    )
}