import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/User/AddUserForm";
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (user) => {
    console.log("handleFormSubmit. user: ", user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="App">
      <AddUserForm onSubmit={handleFormSubmit} />
      <UserList models={users} />
    </div>
  );
}

export default App;
