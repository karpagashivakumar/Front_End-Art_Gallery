import "./Userstyle.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './../navbar/Navbar';

const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileno: "",
    password: ""
  })

  const { name, email, mobileno, password } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/signup", user);
    navigate("/login");
  };

  return (
    <div className="user-container">
        <Navbar/>
      <div className="user-cont">
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <p className="u-name">Create Account</p>
          <div className="u-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => { onInputChange(e) }} required></input>
          </div>
          <div className="u-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => { onInputChange(e) }} required></input>
          </div>
          <div className="u-input">
            <label htmlFor="mobileno">Mobile No</label>
            <input type="text" id="mobileno" name="mobileno" value={mobileno} onChange={(e) => { onInputChange(e) }} required></input>
          </div>
          <div className="u-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => { onInputChange(e) }} required></input>
          </div>
          <div className="u-btn">
            <button type="submit" className="u-btn1">
              Sign up
            </button>
          </div>
          <div className="u-link1">
            <span className="u-font2">Already have an account? </span>
            <span>
              <Link to="/login" className="u-font1">
                login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
