import React, { useEffect, useState } from "react";
import data1 from "./data";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";
import Trash from "./Trash";
function TodoComponent(){
    const [data,setData]=useState([])
    const [des,setDes]=useState("")
    const [title,setTitle]=useState("")
    useEffect(()=>{
        setData(data1)
    },[])
const handleChange=(e,keyid)=>{
    if(keyid==="title"){
        setTitle(e.target.value)
    }
    else{
        setDes(e.target.value)
    }
}
const handleTodo=()=>{
    const newTodo={
        id:4,
        title:title,
        desc:des,
        status:false,
        active:true
    }
    const temp=[...data,newTodo]
    setData(temp)
    console.log(temp);
}
const getCompleted=()=>{
    const temp=data.filter((item)=>item.status===true && item.active===true)
    return temp
}
const getPending=()=>{
    const temp=data.filter((item)=>item.status===false)
    return temp
}
const getTrash=()=>{
    const temp=data.filter((item)=>item.active===false)
    return temp
}
const changeStatus=(idd)=>{
    setData(data.map((item)=>{
        if(item.id===idd){
            return{...item,status:!item.status}
        }
        else{
            return item
        }
    }))
}
const changeActive=(idd)=>{
    // const temp=data
    //   const obj=temp.find((item)=>item.id===idd)
    //   console.log(obj)
    //   obj.active=!obj.active
    //   setData(temp)
    //   console.log(temp)
    setData(data.map((item)=>{
        if(item.id===idd){
            return{...item,active:!item.active}
        }
        else{
            return item
        }
    }))
}
    return(
        <>
         <div>
            Title:<input type="text" onChange={(e)=>handleChange(e,"title")}></input>
            Description:<input type="text" onChange={(e)=>handleChange(e,"des")}></input>
            <button onClick={()=>handleTodo()}>Click</button>
           </div>
           {console.log(data)}
           <div>
            <CompletedTask data={getCompleted()} prop1={changeStatus} prop2={changeActive}></CompletedTask>
            <PendingTask data={getPending()} prop1={changeStatus}></PendingTask>
            <Trash data={getTrash()} prop2={changeActive}></Trash>
           </div>
        </>
    )
}
export default TodoComponent