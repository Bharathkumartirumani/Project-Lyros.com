import { useState } from "react";

function useHook(){
    const [data,useData]=useState(110)
    return data
}
export  default useHook;