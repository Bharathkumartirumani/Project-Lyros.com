import React from "react";
class Completed1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <h1>Completed Tasks</h1>
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
export default Completed1