import React from "react";
class LoginPageClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
           <button onClick={()=>this.props.navigate("./adminLogin")}>Admin DashBoard</button>
           <button onClick={()=>this.props.navigate("./userLogin")}>User DashBoard</button>
           </>
        )
    }
}
export default LoginPageClass