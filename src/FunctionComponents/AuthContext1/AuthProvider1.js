import { useReducer } from "react";
import AuthhContextValue from "./AuthContextValue";
import AuthhContextDispatch from "./AuthContextDispatch";
import SignInPage from "./SignInPage";
import MainPage from "./MainPage";
function AuthProvider1(){
    const [isLoggedIn,dispatch]=useReducer(reducerFun,false)
    function reducerFun(state,action){
        switch(action.type){
            case "LOGIN":{
                return true
            }
            case "LOGOUT":{
                return false
            }
        }
    }
    return(
        <>
       <AuthhContextValue value={dispatch}>
        <AuthhContextDispatch value={isLoggedIn}>
            <SignInPage></SignInPage>
            <MainPage></MainPage>
        </AuthhContextDispatch>
       </AuthhContextValue>
        </>
    )
}