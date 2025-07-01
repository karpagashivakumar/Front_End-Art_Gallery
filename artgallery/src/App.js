import { Route, Routes } from "react-router-dom";
import Art from "./components/Art";
import Login from "./User/Login";
import Signup from './User/Signup';
import Forgotpwd from './User/Forgotpwd';
import Admin from './User/Admin';
import Adduser from './User/Adduser';
import Edituser from './User/EditUser';
import Viewuser from './User/Viewuser';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Art />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<Forgotpwd />} />
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/adduser" element={<Adduser />}></Route>
      <Route path="/edituser/:id" element={<Edituser />}></Route>
      <Route path="/viewuser/:id" element={<Viewuser />}></Route>
    </Routes>
  );
};

export default App;
