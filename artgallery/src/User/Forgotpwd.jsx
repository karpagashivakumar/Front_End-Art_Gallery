import "./Userstyle.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";

const Forgotpwd = () => {

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
    const result = await axios.post("http://localhost:8080/user/change_password", user);
    if (result.data === "Password Changed") {
      navigate("/login");
    }
  };

  return (
    <div className="user-container">
      <Navbar/>
      <div className="user-cont">
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <p className="u-name">Forgot Password</p>
          <div className="u-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className="u-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className="u-btn">
            <button type="submit" className="u-btn1">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpwd;
