import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import ErrorDialog from "../UI/Modals/ErrorDialog";

const DIALOG_TITLE = "Invalid input";
const FIELDS_ARE_EMPTY_ERROR = "Please fill the fields";
const INVALID_AGE_ERROR = "Please enter a valid age";

const AddUserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };
  const handleAgeChange = (event) => {
    setAge(event?.target?.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: DIALOG_TITLE,
        message: FIELDS_ARE_EMPTY_ERROR,
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: DIALOG_TITLE,
        message: INVALID_AGE_ERROR,
      });
      return;
    }

    onSubmit({ id: uuidv4(), name: username, age: +age });
    setUsername("");
    setAge("");
  };
  const handleErrorDialogClose = () => {
    setError(null);
  };

  return (
    <>
      <ErrorDialog
        isOpen={error}
        onClose={handleErrorDialogClose}
        title={error?.title}
        message={error?.message}
      ></ErrorDialog>
      <Card>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={username}
                onChange={handleUsernameChange}
                type="text"
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                value={age}
                onChange={handleAgeChange}
                type="number"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUserForm;
