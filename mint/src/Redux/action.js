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
  
     
     Axios.get(` http://localhost:8080/country`,{
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
  
     return (dispatch)=>{
         dispatch(fetchDataRequest())

     
     
     Axios.get(`http://localhost:8080/latest`,{
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
      
     Axios.get(`http://localhost:8080/latest`,{
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




export {fetchData,fetchmarket,fetchfor}
