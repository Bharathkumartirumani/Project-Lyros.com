import React from "react";
class LifeCycleMethods1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            message:"hii"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("in dsp")
    //       this.state=props.state
    //     return {message:props.message}
    // }
    componentDidMount(){
        console.log("inside componentdidmount")
        setTimeout(()=>{
            this.setState({message:"hiii"})
        },3000)
    }
    shouldComponentUpdate(newprops,newstate){
        if(this.state.message===newstate.message){
            return false
        }
        else{
            return true
        }
    }
    getSnapshotBeforeUpdate(props,state){
        // console.log("snapshort",state)
        return "snapshort"
    }
    componentDidUpdate(props,state,snap){
        console.log(state,snap)
    }
    render(){
        {console.log("render")}
        return(
            <>

            <h1>{this.state.message}</h1></>
        )
    }

}
export default LifeCycleMethods1;