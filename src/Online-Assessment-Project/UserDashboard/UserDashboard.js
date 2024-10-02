
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Context from "../Context/Context"
import "./UserDashboard.css"
function UserDashboard(){
    const {globalUser,_} = useContext(Context)
    const navigate = useNavigate()
   return(
        <>
            <div className="main-div">
                <div className="user-details">
                    <p >Username : {globalUser.Username}</p>
                    <p>Email : {globalUser.Email}</p>
                    <div >
                    <button onClick={()=>navigate("/")} className="home">Home</button>
                </div>
                </div>
                <div className="total">
                <div className="heading1">
                <h1>Hii {globalUser.Username}</h1>
                <h1>Select Technology</h1>
                </div>
                <div className="user-links">
                    <Link to='/reactQuiz' className="react">React quiz</Link><br/><br/>
                    <Link to='/htmlQuiz' className="html">Html quiz</Link><br/><br/>
                    <Link to='/CssQuiz' className="css">Css quiz</Link><br/><br/>
                    <Link to='/jsQuiz' className="js">Java Script quiz</Link><br/>
                </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
