import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import ErrorDialog from "../UI/ErrorDialog";

const DIALOG_TITLE = "Invalid input";
const INVALID_NAME_ERROR = "Please fill the name field";
const INVALID_AGE_ERROR = "Please enter a valid age";

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("0");
  const [isValid, setIsValid] = useState(true);
  const [validationError, setValidationError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };
  const handleAgeChange = (event) => {
    setAge(event?.target?.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = { id: uuidv4(), name: username, age: +age };

    if (!user.name) {
      setIsValid(false);
      setValidationError(INVALID_NAME_ERROR);
      return;
    }
    if (user.age < 0) {
      setIsValid(false);
      setValidationError(INVALID_AGE_ERROR);
      return;
    }

    onSubmit(user);
    setUsername("");
    setAge("0");
  };
  const handleErrorDialogClose = () => {
    setIsValid(true);
    setValidationError(null);
  };

  return (
    <>
      <ErrorDialog
        isOpen={!isValid}
        onClose={handleErrorDialogClose}
        title={DIALOG_TITLE}
        message={validationError}
      ></ErrorDialog>
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
    </>
  );
};

export default UserForm;
