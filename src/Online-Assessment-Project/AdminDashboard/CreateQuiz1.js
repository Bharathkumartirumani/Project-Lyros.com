import { useContext, useState } from "react"
import CreateQuiz2 from "./CreateQuiz2"
import { useNavigate } from "react-router-dom"
import Context from "../Context/Context"
import "./CreateQuiz.css"
const CreateQuiz1= () => {
    const [dropDownValue, setDropDownValue] =useState(null)
    const [pages, setPages] = useState('')
    const [createQuiz,setCreateQuiz] = useState(false)
    const navigate = useNavigate()
    const {globalUser} = useContext(Context)

    let array = Array.from({length : pages}, (_,i) => i+1)

    const handledropdown =(e) => {
        setDropDownValue(e.target.value)
    }   

    const handleBack = (e) => {
        navigate('/adminDashboard')
    }

    const handlePage = (e) => {
        e.preventDefault()
        if(dropDownValue){
            if(pages > 0){
                setCreateQuiz(true)
                console.log(createQuiz)
            }
            else{
                alert('Please select Questions')
            }
        }
        else{
            alert("Please select technology")
        }
    }


    const handleCreateQuiz = () => {
        setCreateQuiz(false)
    }

    const handleques = (e) => {
        e.preventDefault()
        setPages(e.target.value)
    }
    return(
        <>
            <div className="con">
                <div className="con1">
                <div className="admin-details">
                        <p >Username : {globalUser.Username}</p>
                        <p>Email : {globalUser.Email}</p>
                        <div>
                    <button onClick={(e)=>handleBack(e)}>Dash-Board</button>
                </div>
                </div>
                <div className="action">
                    <select onChange={(e) => handledropdown(e)} className="dropdown">
                        <option selected>select tech</option>
                        <option value="React">React</option>
                        <option value="HTML">HTML</option>
                        <option value='css'>CSS</option>
                        <option value='js'>Java Script</option>
                    </select><br/><br/>
                    Ques Count : <input type="text" onChange={(e) => handleques(e)} className="dropdown-text"></input><br/><br/>
                    <button type="submit" onClick={(e) => handlePage(e)} className="submit-button">Submit</button>
                    { createQuiz && <CreateQuiz2 totalPages = {array} perPage = {1} dropDownValue = {dropDownValue} createQuizValue ={handleCreateQuiz}></CreateQuiz2>} 
                </div>
               
                </div>
            </div>
            {console.log(createQuiz)}
        </>
    )
}
export default CreateQuiz1