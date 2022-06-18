import  Axios  from "axios";
import * as types from "./actionTypes";
// import  Axios  from 'axios'
// require('dotenv').config()
// var key=process.env.secret_key


const fetchDataRequest=(payload)=>{
    return {
        type:types.FETCH_DATA_REQUEST,
        payload
    }

}
const fetchDataSuccess=(payload)=>{
    return {
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure=(payload)=>{
    return {
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData=(payload)=>{
    console.log(payload,"ddff")
     return (dispatch)=>{
         dispatch(fetchDataRequest())
        // https://newsapi.org/v2/top-headlines?country=${payload}&apiKey=2349dc924e73400cb19b1bf9ec65bbfa
     
     Axios.get(`https://newsapi.org/v2/top-headlines?country=${payload}&apiKey=2349dc924e73400cb19b1bf9ec65bbfa`,{
         params:{
             ...payload
         }
     })
     .then((r)=>{
         console.log(r)
         dispatch(fetchDataSuccess(r.data))})
     .catch((e)=>{
        
         dispatch(fetchDataFailure(e.data))})
     }; 

}


const fetchmarket=(payload)=>{
    console.log(payload,"ddff")
     return (dispatch)=>{
         dispatch(fetchDataRequest())

        // https://newsapi.org/v2/everything?q=market&from=2022-06-16&sortBy=popularity&apiKey=2349dc924e73400cb19b1bf9ec65bbfa
     
     Axios.get(`https://newsapi.org/v2/everything?q=market&from=2022-06-16&sortBy=popularity&apiKey=2349dc924e73400cb19b1bf9ec65bbfa`,{
         params:{
             ...payload
         }
     })
     .then((r)=>{
         console.log(r)
         dispatch(fetchDataSuccess(r.data))})
     .catch((e)=>{
        
         dispatch(fetchDataFailure(e.data))})
     }; 

}

const fetchfor=(payload)=>{
  
     return (dispatch)=>{
         dispatch(fetchDataRequest())
        // https://newsapi.org/v2/everything?q=weather&q=goverment&from=2022-06-16&sortBy=popularity&apiKey=2349dc924e73400cb19b1bf9ec65bbfa
     Axios.get(`https://newsapi.org/v2/everything?q=weather&q=goverment&from=2022-06-16&sortBy=popularity&apiKey=2349dc924e73400cb19b1bf9ec65bbfa`,{
         params:{
             ...payload
         }
     })
     .then((r)=>{
         console.log(r)
         dispatch(fetchDataSuccess(r.data))})
     .catch((e)=>{
        
         dispatch(fetchDataFailure(e.data))})
     }; 

}
//************************* */
const Postuser=(payload)=>{
    console.log(payload,"ddff")
     return (dispatch)=>{
         dispatch(fetchDataRequest())
       
     Axios.post(`http://localhost:8080/user`,payload
     )
     .then((r)=>{
         console.log(r)
         dispatch(fetchDataSuccess(r.data))})
     .catch((e)=>{
        
         dispatch(fetchDataFailure(e.data))})
     }; 

}



export {fetchData,fetchmarket,fetchfor,Postuser}
