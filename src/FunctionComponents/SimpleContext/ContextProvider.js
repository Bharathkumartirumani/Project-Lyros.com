import ConsumerOne from "./ConsumerOne"
import ConsumerTwo from "./ConsumerTwo"
import SimpleContext from "./SimpleContext"
import { useState } from "react"

function ContextProvider(){
    const [username,setUsername]=useState("bharath")
    return(
        <>
        <SimpleContext.Provider value={{username:username,setUsername:setUsername}}>
            <ConsumerOne></ConsumerOne>
            <ConsumerTwo></ConsumerTwo>
        </SimpleContext.Provider>
        </>
    )
}
export default ContextProvider