import hocStyling from "./hocStyling"
import React from "react"
import PropTypes from 'prop-types'
class NormalComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
           <h1 style={this.props.data}>{this.props.fname}HII HELLO ADAB VANAKAM</h1>
           </>
        )
    }
}
    NormalComponent.propTypes={
        fname:PropTypes.string,
        tech:PropTypes.array
    }
    NormalComponent.defaultProps={
        fname:"bhara"
    }

export default hocStyling(NormalComponent)