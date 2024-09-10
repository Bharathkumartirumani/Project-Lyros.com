import { useEffect} from "react";
import data1 from "../TodoApplication/data";
import useArray from "../CustomHooks/useArray";

function ArrayConsumer(){
    const {array,getData,getData1}=useArray(data1)
    useEffect(()=>{
         getData()
    },[])
    

    return(
        <>
        <button onClick={(e)=>getData1({
            title:"assignment",
            desc:"array",
            id:5,
            status:false,
            active:true
        })}>data</button>
        {
            array.map((item)=>(
                <>
                <h1>{item.title}</h1></>
            ))
        }
        {console.log(array)}
        </>
    )
}
export default ArrayConsumer