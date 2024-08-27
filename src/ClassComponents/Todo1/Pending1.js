import React from "react";
class Pending1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <>
          <h1>Pending Task</h1>
          {this.props.prop1.map((item)=>(
            <>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
            <button onClick={()=>this.props.prop2(item.id)}></button>
            </>
        ))}</>
        )
    }
}
export default Pending1