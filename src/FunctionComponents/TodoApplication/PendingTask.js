function PendingTask(props){
    return(
     <>
     <h1>Pending Tasks</h1>
     {props.data.map((item)=>(
                <>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button onClick={()=>props.prop1(item.id)}>done</button>
                <button>trash</button></>
                
 
     ))}
     </>
    )
 }
 export default PendingTask