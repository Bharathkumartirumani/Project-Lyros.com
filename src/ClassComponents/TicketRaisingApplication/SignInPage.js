
import axios from "axios";
import React from "react";
import "./Styles/SignInPage.css"; // Import CSS file

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
            Confirm_Password: "",
            Passworderr: ""
        };
    }

    handleChange = (e, keyid) => {
        if (keyid === "username") {
            this.setState({ Username: e.target.value });
        } else if (keyid === "password1") {
            this.setState({ Password: e.target.value });
        } else {
            this.setState({ Confirm_Password: e.target.value });
        }
    }

    handleSubmit = (e) => {
        if (this.state.Username !== "" && this.state.Password !== "" && this.state.Password === this.state.Confirm_Password) {
            axios.post("http://localhost:3001/LoginDetails", {
                username: this.state.Username,
                password: this.state.Password
            }).then((res) => { console.log(res) })
                .catch((err) => { console.log(err) });
            const { navigate } = this.props.navigate;
            navigate("/");
        } else {
            this.setState({ Passworderr: "Username, Password, or Confirm Password are not matching" });
        }
    }

    render() {
        return (
            <div className="sign-in-page">
                <h1>Admin Sign-In Page</h1>
                Username: <input type="text" placeholder="enter username" onChange={(e) => this.handleChange(e, "username")} />
                Password: <input type="password" placeholder="enter password" onChange={(e) => this.handleChange(e, "password1")} />
                Confirm Password: <input type="password" placeholder="confirm password" onChange={(e) => this.handleChange(e, "password2")} />
                <div className="error">{this.state.Passworderr}</div>
                <button onClick={this.handleSubmit}>Sign-In</button>
            </div>
        );
    }
}

export default SignInPage;
