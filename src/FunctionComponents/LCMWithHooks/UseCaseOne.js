import axios from "axios";
import React, { useEffect, useState } from "react";
function UseCaseOne(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/TicketDetails").then((res)=>setData(res.data)).catch((err)=>console.log(err))
        console.log("useeffect")
    },[])
    return(
    <>
    {console.log("render")}
        {
        data.map((item)=>(
            <>
            <h1>{item.id}</h1>
            <p>{item.status}</p>
            </>
        ))}
        {/* <button onClick={()=>setData(10)}>hii</button> */}
        </>
    )
}
export default UseCaseOne