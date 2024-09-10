import React from "react"
function ChildComponentOne(props){
    return(
        <>
        {console.log("childone")}
        {props.data}</>
    )
}
// export default React.memo(ChildComponentOne,(prevProps,nextProps)=>{
//     console.log(prevProps,nextProps)
//     if(prevProps!==nextProps){
//         return false
//     }
//     else{
//         return true
//     }
// })
export default React.memo(ChildComponentOne)