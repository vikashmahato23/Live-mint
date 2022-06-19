import  "./home.css";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {  fetchData, fetchfor, fetchmarket } from "../Redux/action";
import { getDefaultNormalizer } from "@testing-library/react";
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { Desc } from "./Desc";

export const Home=(coun)=>{
        console.log(coun,"dfdf")
    
        const dispatch=useDispatch()
    const[snew,setData]=useState([])
     const data=useSelector((state)=>(state.newsData.data))
    useEffect(()=>{
        if(coun.prop=="markets"){
            dispatch(fetchmarket())
        }
        else if(coun.prop=="for"){
            dispatch(fetchfor())
        }
        else{
            dispatch(fetchData(coun.prop))
        }
      
    },[dispatch,coun.prop])

console.log(data,"sdf")
    return (
        <div className="home">
          
          {data?data.map((e,i)=>{
              const today= `${e.publishedAt}`;
             var hr= today.split("T")[1].split(":")[0]
             var min=today.split("T")[1].split(":")[1]
             var zone;
             if(hr>=12){
               zone="PM"
             }
             else{
                zone="AM"
             }
           var n=i
            // const date = new Date();
            // <Moment format='MMMM Do YYYY, h:mm:ss a'>{e.publishedAt}</Moment>
            return (
                <div key={i}   onClick={()=>{
                    console.log(n)
                }}>
            <div className="smallnews">
                <div><p>{e.title}</p>
                    <p className="time">{hr}:{min} {zone}</p></div>
                <div><img  src={e.urlToImage}  alt="" /></div>
                
                </div> <Desc/> </div>)
          }):null}
      
       
    
        </div>
    )
}

