function CompletedTask(props){
   return(
    <>
    <h1>Completed Tasks</h1>
    {props.data.map((item)=>(
               <>
               <h1>{item.title}</h1>
               <p>{item.desc}</p>
               <button onClick={()=>props.prop1(item.id)}>undone</button>
               <button onClick={()=>props.prop2(item.id)}>trash</button>
               </>

    ))}
    </>
   )
}
export default CompletedTask