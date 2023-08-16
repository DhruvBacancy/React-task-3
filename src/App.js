import Control from "./component/Control"
import { userData } from "./component/Control"
import ViewUser from "./component/ViewUser";
import EditUser from "./component/EditUser";
import Navigation from "./component/Navigation";
import Home from './component/Home'
import DeleteUser from './component/DeleteUser';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


export default function App() {
  const [data, setUserData] = useState([]);


  const handleadd = () => {
    setUserData(userData);
  }

  const handleEdit = (id, updatedData) => {
    const newData = data.map((val) => (+val.tempId === +id ? updatedData : val));
    setUserData(newData);
  }

  const handleDelete = (id) => {
    const delData = data.filter((_, i) => i !== id);
    userData.splice(id);
    setUserData(delData);
    console.log(userData)
  }

  return (
    <>
      <h2>Welcome To The App:</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Control handleadd={handleadd} />} />
        <Route path="/viewuser" element={<ViewUser items={data} handleDelete={handleDelete} />} />
        <Route path="/edituser/:id" element={<EditUser user={data} handleEdit={handleEdit} />} />
        <Route path="/deleteuser" element={<DeleteUser />} />
      </Routes>
    </>
  )
}