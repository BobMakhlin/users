import { useState } from "react";
import "./App.css";
import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (user) => {
    console.log("handleFormSubmit. user: ", user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="App">
      <UserForm onSubmit={handleFormSubmit} />
      <UserList models={users} />
    </div>
  );
}

export default App;
