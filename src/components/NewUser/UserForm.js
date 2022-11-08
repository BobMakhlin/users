import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };
  const handleAgeChange = (event) => {
    setAge(event?.target?.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const user = { id: uuidv4(), name: username, age: +age };
    onSubmit(user);

    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label>Username</label>
            <input
              value={username}
              onChange={handleUsernameChange}
              type="text"
            />
          </div>
          <div className={styles.control}>
            <label>Age (Years)</label>
            <input value={age} onChange={handleAgeChange} type="number" />
          </div>
        </div>
        <div className={styles.actions}>
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
