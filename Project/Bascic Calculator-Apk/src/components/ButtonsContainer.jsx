import styles from "./ButtonContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
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
    <div classNameName={styles.buttonsContainer}>
      {ButtonsArray.map((ButtonName) => (
        <button
          key={ButtonName}
          classNameName={styles.buttons}
          onClick={() => onButtonClicked(ButtonName)}
        >
          {ButtonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
