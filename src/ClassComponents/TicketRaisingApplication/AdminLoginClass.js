
import React from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import "./Styles/AdminLoginClass.css"; // Import CSS file

class AdminLoginClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errusername: "",
            errpassword: "",
        };
    }
    
    handleSubmit = (e) => {
        const { navigate } = this.props;
        axios.get(`http://localhost:3001/AdminLoginDetails?username=${this.state.username}&&password=${this.state.password}`)
            .then((res) => {
                const response = res.data[0];
                if (this.state.username!=="" && this.state.password!=="") {
                    if (!response) {
                        navigate('/adminSignInPage');
                    }
                    if (response.username === this.state.username && response.password === this.state.password) {
                       this.props.context.setUsername(this.state.username)
                        navigate('/tickets');
                    }
                } else {
                    navigate("/adminSignInPage");
                    console.log("hiii")
                }
            }).catch((err) => console.log(err));
    }

    handleChange = (e, keyword) => {
        if (keyword === "username") {
            if (e.target.value!=="") {
                this.setState({ username: e.target.value });
            } 
            if(e.target.value===""){
                this.setState({ errusername: "please enter username" });
            }
        } else {
            if (e.target.value!=="") {
                this.setState({ password: e.target.value });
            }
            if(e.target.value===""){
                this.setState({ errpassword: "please enter password" });
            }
        }
    }

    render() {
        return (
            <div className="outer-layer">
            <div className="admin-login">
                UserName:<input type="text" placeholder="please enter username" onBlur={(e) => this.handleChange(e, "username")} />
                <div className="error">{this.state.errusername}</div>
                {/* {console.log(this.state.globalUsername)} */}
                Password:<input type="password" placeholder="please enter password" onBlur={(e) => this.handleChange(e, "password")} />
                <div className="error">{this.state.errpassword}</div>
                <button onClick={()=>this.handleSubmit()}>login/Signup</button>
            </div></div>
        );
    }
}

export default AdminLoginClass;
