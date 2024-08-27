import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        {console.log("complete")}
        return(
           
            <>
            <h1>Completed Task</h1>
            {this.props.prop1.map((item)=>(
                <>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <p>{item.status}</p>
                <button onClick={()=>this.props.prop2(item.id)}>undone</button>
                <button onClick={()=>this.props.prop3(item.id)}>Delete</button>
                </>
            ))}</>

        )
    }
}
export default CompletedComponent