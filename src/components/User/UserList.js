import Card from "../UI/Card";
import styles from "./UserList.module.css";

const User = ({ model }) => {
  return (
    <li className={styles.user}>
      {model.name} ({model.age} years old)
    </li>
  );
};

const UserList = ({ models }) => {
  if (models.length === 0) {
    return null;
  }

  return (
    <Card>
      <ul className={styles.userList}>
        {models.map((model) => (
          <User key={model.id} model={model} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
