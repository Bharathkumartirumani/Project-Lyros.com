import React from "react";
class ComponentB extends React.Component{
    constructor(){
        super()
        this.state={
            data:10
        }
        }
        // static getDerivedStateFromProps(props,state){
        //     return {data:props.data}
        // }
        componentDidMount(){
            console.log("inside componentdidmount")
            setTimeout(()=>{
               this.setState({data:this.state.data-1})
               console.log(this.state.data)
            },1000)
         }
        counter=()=>{
            if(this.state.data>0){
                this.componentDidMount()
            }
            else{
               
            }
        }
        
    render(){
        {console.log("render",this.state.data)}
        return(
            <>
            {/* {console.log(this.counter())} */}
           
            {console.log(this.counter())} 
    
            <h1>{this.state.data}</h1>
            
            </>
        )
    }

    
}
export default ComponentB