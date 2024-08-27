import React from "react";
class FilterClothingProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
             result:[],
             name:"",
             data:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return ({data:props.data})
    }
    handleName=(e)=>{
            this.setState({name:e.target.value})
    }
    handleChange=()=>{
          const hii= this.state.data.filter((item)=>item.pName==this.state.name)
          this.setState({result:hii})
    }
    render(){
        return(
            <>
            Product Name:<input type="text" onChange={(e)=>this.handleName(e)}></input>
            <button onClick={()=>this.handleChange()}>Search</button>
            <div>{this.state.result.map((item)=>(
                <><h1>{item.pName}</h1>
                <p>{item.price}</p>
                <p>{item.manufacturer}</p>
                <p>{item.expectedDelivery}</p></>
            ))}</div>
            </>
        )
    }
    
}
export default FilterClothingProduct;