import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginClass from "./AdminLoginClass";
function AdminLoginPageFunction(){
    let navigate=useNavigate();
    return(
        <>
        <AdminLoginClass navigate={{navigate}}></AdminLoginClass>
        </>
    )
}
export default AdminLoginPageFunction