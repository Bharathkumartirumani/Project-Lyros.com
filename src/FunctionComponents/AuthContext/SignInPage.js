import { useContext, useState } from "react";
import AuthhContext from "./AuthhContext";
function SignInPage(){
    const {isLoggedIn,ChangeFun}=useContext(AuthhContext)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [errUser,setUserErr]=useState("")
    const [errPWD,setPwdErr]=useState("")
   const  handleChange=(e,keyid)=>{
        if(keyid==="uname"){
            setUsername(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }
    const handleError=(e,keyword)=>{
        if(keyword==="uname"){
            setUserErr("username is required")
        }
        else{
            setPwdErr("password is required")
        }
       
    }
    const handleLogin=(e)=>{
         ChangeFun(!isLoggedIn)
    }
    return(
        <>
        Username:<input type="text" onBlur={(e)=>handleError(e,"uname")} onChange={(e)=>handleChange(e,"uname")}></input>
        Passsword:<input type="text" onBlur={(e)=>handleError(e,"pass")} onChange={(e)=>handleChange(e,"pass")}></input>
        <button onClick={(e)=>handleLogin(e)}>LogIn</button>
        <button onClick={(e)=>handleLogin(e)}>LogOut</button>
        <h1>Sign-In-Page</h1>
        </>
    )
}
export default SignInPage