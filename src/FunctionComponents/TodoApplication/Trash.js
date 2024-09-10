function    Trash(props){
    return(
     <>
     <h1>Trash</h1>
     {props.data.map((item)=>(
                <>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button onClick={()=>props.prop2(item.id)}>untrash</button></>
 
     ))}
     </>
    )
 }
 export default Trash