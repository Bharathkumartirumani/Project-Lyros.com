import React from "react";
import Completed1 from "./Completed1";
import Pending1 from "./Pending1";

class TodoComponent1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {todo:props.data}
    }
    getCompleted=()=>{
        const completed=this.state.todo.filter((item)=>item.status===true)
        return completed
    }
    getPending=()=>{
        const pending=this.state.todo.filter((item)=>item.status===false)
        return pending
    }
    changeTodo=(todoId)=>{
        const temp=this.state.todo
        const obj=temp.find((item)=>item.id===todoId)
        // obj.status=!obj.status
        // console.log(obj.name);
        console.log(temp)
        this.setState({todo:temp})
     }
    render(){
        return(
            <>
            <Completed1 prop1={this.getCompleted()} prop2={this.changeTodo}></Completed1>
            <Pending1 prop1={this.getPending()} prop2={this.changeTodo}></Pending1>
            {/* {console.log(this.state.todo)} */}
            {/* <button onClick={()=>this.changeTodo(1)}>hiii</button> */}
            {/* {this.changeTodo(1)} */}
            </>
        )
    }
}
export default TodoComponent1