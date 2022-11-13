import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = ({ models }) => {
  if (models.length === 0) {
    return null;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            {model.name} ({model.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
