import React from "react";
class FormElements extends React.Component{
    constructor(props)

{
    super(props)
    this.state={
        tech:'',
        projects:'',
        agree:false,
        radio:''
    }
}
// handleTech=(e)=>{
//     console.log(e.target.value)
//     this.setState({tech:e.target.value})
// }
// handleExp=(e)=>{
//     console.log(e.target.value)
//     this.setState({projects:e.target.value})
// }
// handleAgreement=(e)=>{
//     this.setState({agree:!this.state.agree})
// }
handleChange=(e,keyid)=>{
       if(keyid==="select"){
        this.setState({tech:e.target.value})
       }
       else if(keyid==="text"){
        this.setState({projects:e.target.value})
       } 
       else{
        this.setState({agree:!this.state.agree})
        console.log(e)
       }
}
// handleChange=(e)=>{
//     const {name,value}=e.target
//     console.log(name,value)
//     this.setState({[name]:value})
//    }
handleChange1=(e,id)=>{
     if(id==="html"){
        this.setState({radio:e.target.value})
     }
     else if(id==="css"){
        this.setState({radio:e.target.value})
     }
     else{
        this.setState({radio:e.target.value})
     }
}
render(){
    return(
        <form>
Select your tech: <select name="technology" onChange={(e)=>this.handleChange(e,"select")}>
                <option value="">---select---</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">Node JS</option>
                <option value="Express JS">Express JS</option>
            </select>
            <br></br>
            Add your experience:<textarea name="projectdHandled" cols="20" rows="10" onChange={(e)=>this.handleChange(e,"area")}>

            </textarea>
            <br></br>
           I Agree to the terms and condition <input type="checkbox" name="agreement" checked={this.state.agree} onChange={(e)=>this.handleChange(e,"check")}></input><br/>
           HTML<input type="radio" name="language" value="HTML" onChange={(e)=>this.handleChange1(e,"html")}/>
           CSS<input type="radio" name="language" value="CSS" onChange={(e)=>this.handleChange1(e,"css")}/>
           JavaScript<input type="radio" name="language" value="JavaScript" onChange={(e)=>this.handleChange1(e,"java")}/>
           <button>submit</button>
           {this.state.radio}
           {this.state.tech}
        </form>
    )
}
}
export default FormElements