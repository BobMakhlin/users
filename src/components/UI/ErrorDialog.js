import Button from "./Button";
import styles from "./ErrorDialog.module.css";
import Modal from "./Modal";

const ErrorDialog = ({ isOpen, onClose, title, message }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p>{title}</p>
        </div>
        <div className={styles.content}>{message}</div>
        <div className={styles.actions}>
          <Button onClick={onClose}>Okay</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorDialog;
