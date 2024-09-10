import { useState } from "react"
function useArray(data){
    const [array,setArray]=useState([])
    const getData=()=>{
          setArray(data)
    }
    function getData1(element){
        setArray([...array,element])
    }
    // function deleteData(index){
    //     setArray([...array,slice(index,1)])
    // }
    return{array,getData,getData1}
}
export default useArray