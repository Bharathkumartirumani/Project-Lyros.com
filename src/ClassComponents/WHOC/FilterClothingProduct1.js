import hocComponent from "./hocComponent";
import React from "react";
class FilterClothingProduct1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    //    const  {result,handleName,handleChange}=this.props
    {console.log("fgh")}
        return(
            <>
            <input type="text" onChange={(e)=>{this.props.handleName(e)}}></input>
            <button onClick={(e)=>this.props.handleChange(e)}>SEARCH</button>
            {this.props.result.map((item)=>(
                <>
                <h>{item.pName}</h>
                <p>{item.price}</p>
                <p>{item.expectedDelivery}</p>
                <p>{item.manufacturer}</p>
                </>
            ))}
            </>
        )
    }
}
export default hocComponent(FilterClothingProduct1)