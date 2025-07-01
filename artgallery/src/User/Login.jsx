import "./Userstyle.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './../navbar/Navbar';

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/user/login", user);
    if (result.data === "Login Successful") {
      navigate("/");
    }
  };

  return (
    <div className="user-container">
      <Navbar/>
      <div className="user-cont">
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <p className="u-name">Login</p>
          <div className="u-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} required spellCheck="false"></input>
          </div>
          <div className="u-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => onInputChange(e)} required></input>
          </div>
          <Link to="/forgotpassword" className="u-font1">Forgot Password?</Link>
          <div className="u-btn">
            <button type="submit" className="u-btn1" >login</button>
          </div>
          <div className="u-link1">
            <span className="u-font2">Don't have an account? </span>
            <span>
              <Link to="/signup" className="u-font1">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
