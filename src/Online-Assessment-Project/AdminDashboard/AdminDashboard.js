import { useContext,useEffect} from "react"
import Context from "../Context/Context"
import { useNavigate,Link} from "react-router-dom"
import "./AdminDashboard.css"

function AdminDashboardFunction(){
    const {globalUser} = useContext(Context)
    const navigate = useNavigate()
    return(
        <>
         <div className="dashcontainer">
            <div className="details">
            <div className="innerdetails">
            <h1>Welcome</h1><p >Username : {globalUser.Username}</p>
            <p>Email : {globalUser.Email}</p>
            <div className="green">
                    <button onClick={()=>navigate("/")} className="green1">Home</button>
                    <button onClick={()=>navigate("/adminlogin")} className="green2">Logout</button>
            </div>
             </div>
            </div>
           <div className="links">
                <div className="links1">
                    <h1>Events</h1>
                    <h2><Link to='/createQuiz' className="l">Create a quiz</Link></h2>
                    <h2><Link to='/viewResults' className="l">View Results</Link></h2>
                </div>
            </div>
                </div>
                </>
    )
}
export default AdminDashboardFunction