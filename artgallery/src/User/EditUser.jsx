import "./Userstyle.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edituser = () => {

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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/edituser/" + user.id, user);
    alert("Successfully Edited");
    navigate("/admin");
  };

  return (
    <div className="user-container">
      <div className="user-cont">
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <p className="u-name">Edit User</p>
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
            <button type="submit" className="u-btn1">
              Edit User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edituser;