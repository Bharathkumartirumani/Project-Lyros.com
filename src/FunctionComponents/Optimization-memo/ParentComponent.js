import { useCallback, useState } from "react";
import ChildComponentOne from "./ChildComponentOne";
import ChildComponentTwo from "./ChildComponentTwo";

function ParentComponent(){
    const [name,setName]=useState("Bharath")
    const [age,setAge]=useState(24)
    const changeName=()=>{
        console.log("name")
        setName("kumar")
       
    }
    const changeAge=()=>{
        console.log("age")
        setAge(25)
    
    }
    const hii=useCallback(()=>{
        console.log("xcvbn")
        return ()=>{
            const hii="hello"
            return hii
        }
    },[name])
    const hii1=useCallback(()=>{
        console.log("helllll")
        return ()=>{
            const hii1="hellllllo"
            return hii1
        }
    },[age])
    return(
        <>
        <ChildComponentOne data={name} data1={hii()}></ChildComponentOne>
        <ChildComponentTwo data={age} data1={hii1()}></ChildComponentTwo>
        <button onClick={()=>changeName()}>Name</button>
        <button onClick={()=>changeAge()}>Age</button>
        </>
    )
}
export default ParentComponent