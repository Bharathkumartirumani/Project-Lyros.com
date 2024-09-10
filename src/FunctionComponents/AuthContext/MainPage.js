import { useContext } from "react";
import AuthhContext from "./AuthhContext";
function MainPage(){
    const {isLoggedIn,ChangeFun}=useContext(AuthhContext)
    return(
        <>
        {isLoggedIn?<h1>MainPage</h1>:<h1>Please SignIn</h1>}
        </>
    )
}
export default MainPage