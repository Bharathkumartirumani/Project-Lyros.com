
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginClass from "./AdminLoginClass";
import AuthContext from "./AuthContext";
//import "./Styles/Adminlogin.css"; // Import CSS file (if any)

function AdminLoginPageFunction() {
    const navigate = useNavigate();
    let context= useContext(AuthContext)

    return (
        <AdminLoginClass navigate={navigate} context={context}></AdminLoginClass>
    );
}

export default AdminLoginPageFunction;
