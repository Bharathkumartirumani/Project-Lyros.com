import React from "react";
import DashBoard from "../ChildComponents/DashBoardComponent";
import SignInComponent from "../ChildComponents/SignInComponent";
class RootComponent1 extends React.Component{
    constructor(){
        super()
        this.state={
            isEnabled:true,
        userData:{
            name:"bharath",
            role:"engineer"
        }
    }
    }
    toogle=()=>{
        this.setState({isEnabled:!(this.state.isEnabled)})
    }
    render(){
        return(
            <>
           {this.state.isEnabled?
           <>
           <DashBoard data={this.state.userData} func={this.toogle}></DashBoard></>:
           <>
           <SignInComponent></SignInComponent></>}
            </>
        )
    }
}
export default RootComponent1;