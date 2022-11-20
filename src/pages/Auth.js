import React from "react";
import './Auth.css'
import { useState } from "react";
import axios from 'axios';
import {setUserSession} from '../service/AuthService'
import { useNavigate } from "react-router-dom";
import Navigation from "../shared/components/Navigation";

const registerUrl = "https://sc68esrs3j.execute-api.us-east-1.amazonaws.com/prod2/register";
const loginUrl = "https://sc68esrs3j.execute-api.us-east-1.amazonaws.com/prod2/login";

const Auth = (props) => {

    const { WithHeader } = props;
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);


    const loginSubmitHandler = (event) =>{

        
        event.preventDefault();
        if(username.trim() === '' || password.trim() === '')
        {
            setMessage('All fields are required')
            return;
        }
        setMessage(null);

        const requestConfig = {
            headers: {
            "x-api-key": "xTFy6zV4OG1gfRcMq4POb9pz5RZc922A9yUJYoPk",
            },
        };

        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginUrl, requestBody, requestConfig).then((response) => {
            setUserSession(response.data.user, response.data.token);
            navigate('/')
        }).catch(error => {
            if(error.response.status ===401 || error.response.status === 403){
                setMessage(error.response.data.message);
            }else{
                setMessage('sorry... the backend server is down. Please try again later')
            }
        }) 

     
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        if(username.trim() ==='' || email.trim() ==='' || username.trim() ==='' || password.trim() ==='')
        {
            setMessage('All fields are required')
            return;
        }

        const requestConfig = {
          headers: {
            "x-api-key": 'xTFy6zV4OG1gfRcMq4POb9pz5RZc922A9yUJYoPk'
          }
        }
        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password
        }

        axios.post(registerUrl, requestBody, requestConfig).then(response => {
            setMessage('Registeration successful');
        }).catch(error =>{
            if(error.response.status===401 || error.response.status ===403)
            {
                setMessage(error.response.data.message);
            }
            else{
                setMessage('sorry.... backend server is down');
            }
        })
        setMessage(null);
        setEmail('');
        setName('');
        setUsername('');
        setPassword('');

    }



  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setMessage(null);
  };

  if (authMode === "signin") {
    return (
      <div>
        {WithHeader && <Navigation />}
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={loginSubmitHandler}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" value="Register" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};
export default Auth;
