import React from "react";
import LoginPageClass from "./LoginPageClass";
import { useNavigate } from "react-router-dom";
function LoginPageFunction(){
    let navigate=useNavigate();
    return(
        <LoginPageClass navigate={{navigate}}></LoginPageClass>
    )

}
export default LoginPageFunction;