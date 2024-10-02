
import { useContext, useEffect, useState } from "react"
import Context from "../Context/Context"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./ViewResults.css"

const ViewResults = () => {
    const {globalUser} = useContext(Context);
    const [result, setResults] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/results").then((res) => setResults(res.data)).catch((err) => console.log(err))
    },[])

    const handleBack = (e) => {
        navigate('/adminDashboard')
    }

    return( 
        <>
            <hr></hr>
            <div className="maindiv">
                <div className="admindetails">
                    <p >Usernam : {globalUser.Username}</p>
                    <p>Email : {globalUser.Email}</p>
                    <div>
                      <button onClick={(e)=>handleBack(e)} className="boxx">Dash-Board</button>
                     </div>
                </div>
               <div className="box">
                {
                    result.map((item)=>(
                        <>
                        <div className="box1">
                        <p>Username:{item.Username}</p>
                        <p>E-Mail:{item.Mail}</p>
                        <p>Score:{item.count}</p>
                        <p>Technology:{item.techno}</p>
                        </div>
                        </>
                    ))
                }
               </div>
            </div>
        </>
    )
}

export default ViewResults

