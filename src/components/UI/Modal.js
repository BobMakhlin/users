import styles from "./Modal.module.css";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalBackground}>
      {children}
    </div>
  );
};

export default Modal;
