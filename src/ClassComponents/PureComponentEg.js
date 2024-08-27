import React from "react";
class PureComponentEg extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    changeCount=()=>{
        this.setState({count:0})
    }
    render(){
        {console.log("render")}
        return(
            <>
            {this.state.count}
            <button onClick={()=>this.changeCount()}>button</button>
            </>
        )
    }
}
export default PureComponentEg