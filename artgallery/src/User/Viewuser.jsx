import "./Userstyle.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Viewuser = () => {

  const { id } = useParams();

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

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/getuser/${id}`);
    setUser(result.data);
  }

  return (
    <div className="user-container">
      <div className="user-cont">
        <form className="user-form">
          <p className="u-name">View User</p>
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
            <Link to="/admin">
              <button className="u-btn1">Admin</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Viewuser;