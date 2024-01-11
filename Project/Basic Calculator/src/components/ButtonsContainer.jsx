import styles from "./ButtonContainer.module.css";

const ButtonsContainer = () => {
  const ButtonsArray = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
  <div className={styles.buttonsContainer}>
    {ButtonsArray.map((ButtonName) => (
      <button className={styles.buttons}>{ButtonName}</button>
    ))}
  </div>
  );
};
export default ButtonsContainer;
