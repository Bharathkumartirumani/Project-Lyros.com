import React from "react"
function ChildComponentTwo(props){
    return(
        <>
        {console.log("childtwo")}
        {props.data}</>
    )
}
// export default React.memo(ChildComponentTwo,(prevProps,nextProps)=>{
//     console.log(prevProps,nextProps)
//     if(prevProps!==nextProps){
//         return false
//     }
//     else{
//         return true
//     }
// })
export default React.memo(ChildComponentTwo)