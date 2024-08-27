import React from "react"
import { Outlet } from "react-router-dom"
class UserPage extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <>
              
            <h1>XYZ Company </h1>
            <p>Organize a webinar, add co-organizers, and invite your audience to register for your webinar. Engage your audience via features like polls, Q&A, and Raise Hand, and encourage them to speak and present using Allow to talk and Make presenter.</p>
            <Outlet></Outlet>
          
            </>
        )
    }
}
export default UserPage