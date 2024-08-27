
import React from "react";
class FilterElectronicsProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            name:"",
            data:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {data:props.data}
    }
    changeTodo=(e)=>{
        this.setState({name:e.target.value})
    }
   handleChange=()=>{
    {console.log("handle")}
    const hii= this.state.data.filter((item)=>item.pName==this.state.name)
    this.setState({result:hii})
     
   }
    render(){
        return(
            <>
            <input type="text" onChange={(e)=>this.changeTodo(e)}></input>
            <button onClick={()=>this.handleChange()}>Search</button>
            <div>
                {this.state.result.map((item)=>(
                    <>
                    <h1>{item.pName}</h1>
                    <p>{item.price}</p>
                    <p>{item.manufacturer}</p>
                    <p>{item.expectedDelivery}</p></>
                ))
                }
            </div>
            {/* {this.state.name} */}
            </>
        )
    }
}
export default FilterElectronicsProduct;