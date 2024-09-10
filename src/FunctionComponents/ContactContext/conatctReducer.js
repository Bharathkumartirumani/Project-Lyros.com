function contactReducer(state,action){
    switch(action.type){
        case "ADDCONTACT":
            {
                return [...state,action.payload]
            }
            case "DELCONTACT":
                {
                    return state.filter((item)=>item.id!=action.id)
                    
                }
            default:
                console.log("error")
    }
}
export default contactReducer