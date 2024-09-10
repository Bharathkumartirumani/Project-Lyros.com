import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosget from "../CustomHooks/useAxiosget";

function AlgoliaComponent(){
    const {data,getData}=useAxiosget("https://hn.algolia.com/api/v1/search?query=react")
    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        <h1>JSON</h1>
        {
            data.map((item)=>(
                <>
                <h1>{item.title}</h1></>
            ))
        }
        </>
    )
}
export default AlgoliaComponent