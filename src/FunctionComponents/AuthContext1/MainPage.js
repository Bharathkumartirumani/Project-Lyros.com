import { useContext } from "react";
import AuthhContextDispatch from "./AuthContextDispatch";
function MainPage(){
    const isLoggedIn=useContext(AuthhContextDispatch)
    return(
        <>
        {isLoggedIn?<h1>MainPage</h1>:<h1>Please SignIn</h1>}
        </>
    )
}
export default MainPage