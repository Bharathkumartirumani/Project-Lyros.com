
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "./AdminLogIn.css"
function AdminLogIn() {
  const [adminData, setadminData] = useState([])
  const [errorBox, seterrorBox] = useState()
  const [errorPassword, seterrorPassword] = useState()
  const [passwordVisible, setpasswordVisible] = useState(false)
  const [errorName, seterrorName] = useState()
  const [name, setName] = useState()
  const [email,setemail]=useState("")
  const [errorEmail,seterrorEmail]=useState("")
  const [adminId,setAdminId]=useState()

  const [password, setPassword] = useState()
  const {_,setGlobalUser} = useContext(Context)
  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3001/AdminLoginDetails")
      .then((res) => {
        setadminData(res.data);
        console.log("res",res.data)
      })
      .catch((error) => console.log(error));
  }, []);


  const handleChange = (e, keyword) => {
    if (keyword === "name") {
      setName(e.target.value );
      //console.log(e.target.value)
    } else if (keyword === "password") {
     setPassword( e.target.value );
    }else if (keyword==="email"){
      setemail(e.target.value )
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
      if (
      name &&
      password &&
      errorName === "" &&
      errorPassword === "" &&
      email &&
      errorEmail===""
    ) {
      const filteredResult = adminData.filter(
        (item) =>
          item.adminname ===name &&
          item.adminpassword ===password
      );
      console.log("filteredResult",filteredResult)

      if (filteredResult.length === 1) {
        console.log("filteredResult",filteredResult)
        if (
          filteredResult[0].adminname === name &&
          filteredResult[0].adminpassword === password
        ) {
            setAdminId(filteredResult[0].id)
            console.log(filteredResult[0].id)
            setGlobalUser({
              Username : name,
              Email : email,
    
          })
          navigate(`/adminDashboard`);
        }
      } else {
        console.log("else part")
        const usernamechecking = adminData.some(
          (item) => item.adminname === name
        );
        const passwordchecking = adminData.some(
          (item) => item.adminpassword === password
        );

        if (usernamechecking === false && passwordchecking === true) {
         seterrorName( "Please enter correct username" );
        } else if (usernamechecking === true && passwordchecking === false) {
          seterrorPassword("Please enter the correct password");
        } else {
          navigate("/adminSignUp");
        }
      }
    } else {
      if (!name) {
        seterrorName("please enter the name");
      } else {
        seterrorName("");
      }
      if (!email) {
        seterrorEmail( "please enter the password" );
      } else {
        seterrorEmail("")
      }
      if (!password) {
        seterrorPassword( "please enter the password" );
      } else {
        seterrorPassword("")
      }

      
    }
}
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }
  return (
    
        <>
      <div class="big-container">
      <div className="adminlogin">
      <h1 className="hea">Admin/Login</h1>
        <div className="logincontainer">
          <form>
            <div className="loginpage">
              <div className="container1">
                {/* <h1 className="main-heading">Admin/Login</h1> */}
                <div>
                  <label className="heading" htmlFor="name">
                    Name :
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {errorName}
                  </p>
                </div>
                <div>
                    <label className="heading" htmlFor="email">
                      Email :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupemail"
                      placeholder="Enter your email"
                      onChange={(e) => handleChange(e, "email")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                        {errorEmail}
                    </p>
                  </div>
                <div>
                  <label className="heading" htmlFor="password">
                    Password :
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={passwordVisible ? "text" : "password"} // Step 3: Toggle input type
                      id="password"
                      placeholder="Enter your Password"
                      onChange={(e) => handleChange(e, "password")}
                      style={{ paddingRight: "40px" }}
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {passwordVisible ? "🙈" : "👁️"}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {errorPassword}
                  </p>
                </div>
                <div className="button-container">
                  <button
                    className="button"
                    onClick={(e) => handleClick(e)}
                  >
                    LogIn
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}
export default AdminLogIn