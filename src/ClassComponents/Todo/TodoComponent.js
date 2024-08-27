import React from "react";
import CompletedComponent from "./CompletedComponent";
import PendingComponent from "./PendingComponent";
import ArchiveComponent from "./ArchiveComponent";
class TodoComponent extends React.Component{
    constructor(){
        super();
        this.state={
            todo:[],
            name:"",
            age:0,
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {todo:props.data1}
    // }
    handleName=(e)=>{
          this.setState({name:e.target.value})
    }
    handleAge=(e)=>{
        this.setState({age:e.target.value})
  }
  handleTodo=()=>{
       const newTodo={
        id:4,
        name:this.state.name,
        age:this.state.age,
        role:"engineeer",
        status:false,
        active:false
}
       const temp=[...this.state.todo,newTodo]
       console.log("trigger")
       console.log(temp)
       this.setState({todo:temp})
       console.log(this.state.todo)
  }
    getCompletedTask=()=>{
        const completed=this.state.todo.filter((item)=>item.status===true && item.active===true)
        return completed
    }
    // getDeletedTask1=()=>{
    //     const deleted1=this.state.todo.filter((item)=>{item.active===true})
    //     return deleted1
    // }
        getPendingTask=()=>{
            const pending=this.state.todo.filter((item)=>item.status===false)
            return pending
     }
     getArchiveTask=()=>{
        const archive=this.state.todo.filter((item)=>item.active===false)
        return archive
     }
     changeTodo=(todoId)=>{
        const temp=this.state.todo
        const obj=temp.find((item)=>item.id===todoId)
        obj.status=!obj.status
        console.log(obj);
        console.log(temp)
        this.setState({todo:temp})
     }
     deleteTodo=(todoId)=>{
        const temp=this.state.todo
        const obj=temp.find((item)=>item.id===todoId)
        obj.active=!obj.active
        console.log(obj);
        console.log(temp)
        this.setState({todo:temp})
     }

    render(){
        // {console.log(this.changeTodo(1))}
        return(
            <>
           <div>
            Name:<input type="text" onChange={(e)=>this.handleName(e)}></input>
            Age:<input type="text" onChange={(e)=>this.handleAge(e)}></input>
            <button onClick={()=>this.handleTodo()}>Click</button>
           </div>
          <CompletedComponent prop1={this.getCompletedTask()} prop2={this.changeTodo} prop3={this.deleteTodo}></CompletedComponent>
          <PendingComponent prop1={this.getPendingTask()} prop2={this.changeTodo}></PendingComponent>
          <ArchiveComponent prop1={this.getArchiveTask()} prop3={this.deleteTodo}></ArchiveComponent>
           </>
        )
    }
}
export default TodoComponent;