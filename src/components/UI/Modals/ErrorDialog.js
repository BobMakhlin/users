import Button from "../Button";
import styles from "./ErrorDialog.module.css";
import Modal from "./Modal";
import Card from "../Card";

const ErrorDialog = ({ isOpen, onClose, title, message }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Card className={styles.modal}>
        <header>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer>
          <Button onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </Modal>
  );
};

export default ErrorDialog;
