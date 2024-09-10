import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosget(url){
     const [data,setData]=useState([])
     const getData=()=>{
           axios.get(url).then((res)=>{setData(res.data.hits)}).catch((err)=>console.log(err))
     }
     return {data,getData}
}
export default useAxiosget