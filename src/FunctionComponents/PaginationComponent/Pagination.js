import { useState } from "react"
import BlogPage from "../BlogPage"

function Pagination(props){
    const {data,dataPerPage,pagesShown}=props
    const pages=Math.round(data.length/dataPerPage)
    const [currentPage,setCurrentPage]=useState(1)
    const getPaginatedData=()=>{
        const startIndex=(dataPerPage*currentPage)-dataPerPage
        const endIndex=startIndex+dataPerPage
        return data.slice(startIndex,endIndex)
    }
    const goToPreviousPage=()=>{
        setCurrentPage(currentPage-1)
    }
   const  goToNextPage=()=>{
        setCurrentPage(currentPage+1)
    }
    const changePage=(item)=>{
        setCurrentPage(item)
    }
    const getPageNumbers=()=>{
        let start=Math.floor((currentPage-1)/pagesShown)*pagesShown
        return new Array(pagesShown).fill().map((_,idx)=>start+idx+1)
    }
    return(
        <>
        {getPaginatedData().map((item)=>(
           <BlogPage data={item}></BlogPage>
        ))}
        <button onClick={()=>goToPreviousPage()}>Previous</button>
        {
           
            getPageNumbers().map((item)=>{
                if(item<=pages){
                return <button onClick={()=>changePage(item)}>{item}</button>

            }})
        
        }
        <button onClick={()=>goToNextPage()}>Next</button>
        </>
    )
}
export default Pagination