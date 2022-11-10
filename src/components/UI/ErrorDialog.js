import Button from "./Button";
import styles from "./ErrorDialog.module.css";
import Modal from "./Modal";

const ErrorDialog = ({ isOpen, onClose, title, message }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className={styles.modal}>
        <div>{title}</div>
        <div>{message}</div>
        <div>
          <Button onClick={onClose}>Okay</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorDialog;
