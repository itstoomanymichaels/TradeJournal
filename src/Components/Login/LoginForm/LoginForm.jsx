import React from "react";
import './LoginForm.css';
import Card from '../Card/Card';
import { Link } from "react-router-dom";


const LoginForm = (props) => {
    const handleLogIn = () => {
        props.onLogIn()
    }

    return <Card>
        <h1 className="title">Sign In</h1>
        <p className="subTitle">Please log in using your username and password</p>
        <form>
            <div className="inputs_container">
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
            </div>
            <Link to="../../Scenes/Global/Topbar">
                <input type="submit" value="Log In" className="login_button"
                    onClick={handleLogIn}/>
            </Link>
        </form>
        <div className="link_container">
            <a href="" className="small">
                Forgot Password?
            </a>
            <img className="login_hook" src={require("../images/login_hook.png")}/>
        </div>
    </Card>;
};

export default LoginForm