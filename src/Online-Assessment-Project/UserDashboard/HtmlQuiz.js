
import { useState,useEffect, useContext } from "react"
import axios from "axios"
import Context from "../Context/Context"
import { useNavigate } from "react-router-dom"
import "./Quiz.css"
const HtmlQuiz = () =>{
    const [results, setResults] = useState([])
    const [answer, setAnswer] = useState(false)
    const [currentPage, setCurrentPage] =useState(1)
    const [count, setCount] = useState(0)
    const perPage = 1;
    let noOfPages = results.length;
    const {globalUser} = useContext(Context)
    const [showResults, setText] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/html').then((res) => setResults(res.data)).catch((err) => console.log(err))
    })
const handleAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const handleNext = () => {
        const newAnswer = answer
        if(newAnswer){
            handleResult()
            setCurrentPage(currentPage+1)
        }
        else{
            setCurrentPage(currentPage+1)
            if(currentPage === noOfPages){
                setText(false)
            }
        }
    }
const handleBack =  () => {
        navigate('/userDashboard')
    }
 const handleResult = () => {
        if(currentPage === noOfPages){
            axios.post('http://localhost:3001/results',{
                count : count + 1,
                Username : globalUser.Username,
                Mail : globalUser.Email,
                techno : "html"
            })  
            setText(false)
        }
        if(answer){
        axios.get(`http://localhost:3001/html?Answer=${answer}`).then((res) => {
            const answerData = res.data.find(item => item.Answer === answer)
            if(answerData){
                console.log("answer found")
                setCount(count+1)
            }
            else{
                console.log("answer not found")
            }
        }).catch((err) => console.log(err))
        setCurrentPage(currentPage+1)
        }
        else{
            alert("Please select any option")
        }
    }
const getPaginatedData = () =>{
        const startIndex = (currentPage-1)*perPage
        const endIndex=startIndex+perPage
        return results.slice(startIndex,endIndex)
    }
 return(
        <>
        <div className="main-div">
                <div className="user-details">
                    <p >Username : {globalUser.Username}</p>
                    <p>Email : {globalUser.Email}</p>
                    <div>
                    <button onClick={(e)=>handleBack(e)} className="b"> Dash-Board</button>
                </div>
                </div>
                <div className="mcq">
                    {
                        results ?
                            showResults?
                                getPaginatedData().map((item) => (
                                    <>
                                    <h1>HTML QUIZ</h1>
                                    <h1 className="ques">Question {currentPage}: {item.Question}</h1>
                                    <div className="options">
                                        <label className="label">
                                            <input type="radio" value={item.Option1} name="option" checked={answer === item.Option1} onChange={(e) => handleAnswer(e)} className="option"></input>
                                            {item.Option1}
                                        </label><br/><br/>
                                        <label className="label">
                                            <input type="radio" value={item.Option2} name="option" checked={answer === item.Option2} onChange={(e) => handleAnswer(e)} className="option"></input>
                                            {item.Option2}
                                        </label><br/><br/>
                                        <label className="label">
                                            <input type="radio" value={item.Option3} name="option" checked={answer === item.Option3} onChange={(e) => handleAnswer(e)} className="option"></input>
                                            {item.Option3}
                                        </label><br/><br/>
                                        <label className="label">
                                            <input type="radio" value={item.Option4} name="option" checked={answer === item.Option4} onChange={(e) => handleAnswer(e)} className="option"></input>
                                            {item.Option4}
                                        </label>
                                    </div>
                                    <button onClick={() => handleResult()} disabled = {currentPage === noOfPages+1} className="submit">Submit</button>
                                    <button onClick={() => handleNext()} className="skip">Skip</button>                      
                                    </>
                                ))
                                :<h1 className="result">Your result : {count}</h1>
                            :<p>No questions available</p>
                    }
                </div>
            </div>
        </>
    )
}

export default HtmlQuiz
