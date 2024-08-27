import React from "react";
import axios from "axios"
const hocAPICall=(InputComponent)=>{
return class NewComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        // fetch("http://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
        axios.get(this.props.endpoint).then((res)=>this.setState({result:res.data})).catch((error)=>console.log(error))

    }
    render(){
        return(
            <>
            <InputComponent result={this.state.result}></InputComponent>
            </>
        )
    }
}
}
export default hocAPICall