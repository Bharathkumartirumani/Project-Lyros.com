import React from "react";
import { Link,NavLink } from "react-router-dom";
import './NavBarComponent.css'
class NavBarComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rank:false,
            age:false,
            name:false,
            points:false
        }
    }
    componentDidMount(){
        if(this.props.keyword===1){
            this.setState({rank:true})
        }
        if(this.props.keyword===2){
            this.setState({age:true})
        }
        if(this.props.keyword===3){
            this.setState({name:true})
        }
        if(this.props.keyword===4){
            this.setState({points:true})
        }
    }
    render(){
        return(
            <>
            <NavLink to="/"></NavLink>
      <Link to="/rank" >
      <button className={this.state.rank?'activeStatus':'inActiveStatus'}>Rank</button></Link>
      <Link to="/name"><button className={this.state.name?'activeStatus':'inActiveStatus'}>Name</button></Link>
      <Link to="/age" ><button className={this.state.age?'activeStatus':'inActiveStatus'}>Age</button></Link>
      <Link to="/points" ><button className={this.state.points?'activeStatus':'inActiveStatus'}>Points</button></Link>
            </>
        )
    }
}
export default NavBarComponent;