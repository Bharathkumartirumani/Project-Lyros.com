import React from "react";
class DashBoard extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const {name,role}=this.props.data;
        return(
            
            <>
            {console.log(this.props.func)}
            <h1>Usename:{name}</h1>
            <p>Role:{role}</p>
            <button onClick={this.props.func}>SignOut</button></>
        )
    }
}
export default DashBoard