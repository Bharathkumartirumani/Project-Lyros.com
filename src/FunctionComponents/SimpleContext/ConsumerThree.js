import SimpleContext from "./SimpleContext"
import { useContext } from "react"

function ConsumerThree(){
    const {username,setUsername}=useContext(SimpleContext)
    return(
        <>
        {username}
        </>
    )
}
export default ConsumerThree