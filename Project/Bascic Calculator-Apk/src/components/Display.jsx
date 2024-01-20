import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      classNameName={styles.input}
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
