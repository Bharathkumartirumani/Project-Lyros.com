import React from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component{
    constructor(){
        super()
        this.state={
            data:10
        }
    }
    render(){
        return(
          <ComponentB data={this.state.data}></ComponentB>
        )
    }

    
}
export default ComponentA;
