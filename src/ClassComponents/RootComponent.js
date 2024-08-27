import React from "react";
class RootComponent extends React.Component{
    constructor(){
        super()
        this.state={isEnabled:false}
    }
    // change1=()=>{
    //     this.setState({isEnabled:true})
    // }
    // change2=()=>{
    //     this.setState({isEnabled:false})
    // }
    toggle=()=>{
        this.setState({isEnabled:!(this.state.isEnabled)})
    }

    render(){
        return(
            <>
           {this.state.isEnabled?
           <>
           <h1>Welcome</h1>
           <button onClick={this.toggle}>SignOut</button>
           </>:<>
           <h1>Please Sign In</h1>
           <button onClick={this.toggle}>SignIn</button></>}
           </>
        )
    }
}
export default RootComponent