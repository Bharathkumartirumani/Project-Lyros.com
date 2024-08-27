import React from "react";
import { useParams } from "react-router-dom";
import DashBoardClass from "./DashBoardClass";
function DashBoardHooks(){
    let params=useParams()
    return(
        <DashBoardClass data={params}></DashBoardClass>
    )
}
export default DashBoardHooks