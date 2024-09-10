import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosget from "../CustomHooks/useAxiosget";

function JsonComponent(){
    const {data,getData}=useAxiosget("http://localhost:3001/LoginDetails")
    useEffect(()=>{
       getData()
    },[])
    return(
        <>
        <h1>JSON</h1>
        {console.log(data)}
        {
            data.map((item)=>(
                <>
                <h1>{item.title}</h1></>
            ))
        }
        </>
    )
}
export default JsonComponent