import AuthhContext from "./AuthhContext"
import MainPage from "./MainPage"
import SignInPage from "./SignInPage"
import { useReducer, useState } from "react"
function AuthProvider(){
    // const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [isLoggedIn,dispatch]=useReducer(authReducer,false)
    function authReducer(state,action){
        switch(action.type){
            case "LOGIN":{
                return true
            }
            case "LOGOUT":{
                return false
            }
            default:{
                console.log("vhj")
            }
 }
    }
   const  handleLogin=()=>{
        dispatch({type:"LOGIN"})
    }
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }
    return(
        <>
        <button onClick={()=>handleLogin()}>LogIN</button>
        <button onClick={()=>handleLogout()}>lOGoUT</button>
        {isLoggedIn?<h1>Main pAGE</h1>:<h1>Please Log in</h1>}
        <AuthhContext.Provider>
           {/* <SignInPage></SignInPage> */}
            {/* <MainPage></MainPage> */}
        </AuthhContext.Provider>
        </>
    )
}
export default AuthProvider