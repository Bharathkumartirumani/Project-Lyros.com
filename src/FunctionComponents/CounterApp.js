import React, { useReducer, useState } from "react";
function CounterApp(){
    const [data,dispatch]=useReducer(authReducer,0)
    function authReducer(state,action){
        switch(action.type){
            case "positive":
                {return state+1
                }
            case "negative":
                {return state-1
                }
            case "default":{console.log("cvbnm")}
        }
    }
    const counterPositive=()=>{
         dispatch({type:"positive"})
    }
    const counterNegative=()=>{
        dispatch({type:"negative"})
    }
//     const counterPositive=()=>{
//          setData(data+1)
    
// }
// const counterNegative=()=>{
//     setData(data-1)

   
        return(
            <>
            {console.log(useReducer())}
            <button onClick={()=>counterPositive()}>+</button>
            <h1>{data}</h1>
            <button onClick={()=>counterNegative()}>-</button>
            </>
        )
    
    }
export default CounterApp;