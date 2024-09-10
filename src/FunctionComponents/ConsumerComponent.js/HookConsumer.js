import useHook from "../CustomHooks/useHook";
function HookConsumer(){
    const data=useHook()
    return(
        <h1>
        {data}</h1>
    )
}
export default HookConsumer