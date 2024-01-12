// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      //eval predefine for calculator
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalValue = calVal + buttonText;
      setCalVal(newCalValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
