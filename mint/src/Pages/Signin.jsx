import "./signin.css";
import FacebookAuth from 'react-facebook-auth';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useSelector ,useDispatch} from "react-redux";
import { Postuser } from "../Redux/action";
export const Signin=()=>{
  const dispatch=useDispatch()
  const responseGoogle = (response) => {
    console.log(response,"res")
    // dispatch(Postuser())
  }
    // const MyFacebookButton = ({ onClick }) => (
    //      <button onClick={onClick}><img style={{
    //     width:"0px"
    // }}src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png" /><span>Login In with facebook </span></button>
    //   );
       
    //   <button onClick={onClick}><img style={{
    //     width:"20px"
    // }}src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png" /><span>Login In with facebook </span></button>
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div style={{backgroundColor:"#EEEEEE",height:"1000px"}}>
         
      <nav className="nav" 
      style={{position:"static"}}  >
        <div className="explore" >
        </div>
        <div className="logo"><div><img src="https://images.livemint.com/static/livemint-logo-v2.svg" alt="" /></div></div>
        <div className="notification">
         <div>
          </div>
        
        </div>
      </nav>
  
    <div className="title">Login or Register</div>
    
    <div className="container">
     <div className="google" >       
     <GoogleLogin
    clientId="263064859006-ci3hm6491ejo4jmfn0v4ugoo15lfk6g5.apps.googleusercontent.com"
    buttonText="Sign with Google"
    style={{border:"1px solid black"}}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /></div>
     <div className="facebook">
     
     <div>
        <img src="https://accounts.hindustantimes.com/images/icfb.svg" alt="" /> 
        </div>
        <div>
    
            Sign in with Facebook
        </div>

        </div>
     <div className="facebook" style={{ backgroundColor:"black" }}><div>
        <img style={{width:"20px"}} src="https://images.livemint.com/sso/appleid_iconlogo.png" alt="" /> 
        </div>
        <div>
            Sign in with Apple
        </div>
        </div>
         <hr style={{marginTop:"10px"}}/>
       <h3 style={{marginTop:"15px"}}>Email or Mobile Number*</h3>
      <input type="number" style={{width:"397px",height:"40px",marginTop:"15px",fontSize:"20px"}}/>
          <div></div>
    
       </div>
    </div>
        // </div>
    )
}

{/* <div>
        <img src="https://accounts.hindustantimes.com/images/icfb.svg" alt="" /> 
        </div>
        <div>
    
            Sign in with Facebook
        </div> */}