import React from "react";
const hocStyling=(InputComponent)=>{
    return class NewComponent extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            const globalStyle={color:"white",fontStyle:"italic",backgroundColor:"black"}
            return(
              <>
              {this.props.fname}
              <InputComponent data={globalStyle} {...this.props}></InputComponent>
              </>
            )
        }
    }
}
export default hocStyling