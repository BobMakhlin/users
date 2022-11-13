import styles from "./Modal.module.css";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return <div className={styles.backdrop}>{children}</div>;
};

export default Modal;
