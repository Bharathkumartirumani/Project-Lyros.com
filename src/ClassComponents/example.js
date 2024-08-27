import React from "react";
class example extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let fname="bharath"
        return(
            <>
            <h1>{fname}</h1>
            {console.log(fname)}
            </>
            )
    }
}
export default example