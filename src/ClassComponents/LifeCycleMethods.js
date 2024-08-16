import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"xcvbnm"
        }
    }
//   static getDerivedStateFromProps(props,state){
//        console.log("before",props,state)
//        // state.msg=props.msg
//         console.log("after",props,state)
//         return {msg:props.msg}
//     }
    componentDidMount(){
        console.log("inside componentdidmount")
        setTimeout(()=>{
            this.setState({msg:"xcvbnm"})
        },3000)
    }
    shouldComponentUpdate(newprops,newstate){
            if(this.state.msg===newstate.msg){
                return false
            }
            else{
                return true
            }
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>{this.state.count}</h1>
            <h2>{this.state.msg}</h2>
            </>
        )
    }
}
export default LifeCycleMethods