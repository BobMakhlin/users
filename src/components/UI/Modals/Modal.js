import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    onClose();
  };

  return (
    <div onClick={handleBackdropClick} className={styles.backdrop}>
      {children}
    </div>
  );
};

export default Modal;
