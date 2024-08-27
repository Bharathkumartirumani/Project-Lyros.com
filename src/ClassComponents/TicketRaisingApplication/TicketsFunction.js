import React from "react";
import { useNavigate } from "react-router-dom";
import TicketsPageClass from "./TicketsPageClass";
function TicketsFunction(){
    let navigate=useNavigate();
    return(
        <>
        <TicketsPageClass navigate={{navigate}}></TicketsPageClass>
        </>
    )
}
export default TicketsFunction