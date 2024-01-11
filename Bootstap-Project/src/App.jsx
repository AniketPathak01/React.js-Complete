import ListItems from "./Components/ListItems";
import ErrorMessege from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import "./App.css";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems = ["vegatable", "Fruits", "Salad", "Dal", "Roti", "Milk"];

  // let textStateArr = useState("Food Item Entered by User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // const [textToShow, setTextState] = useState();

  const [foodItems, setFoodItem] = useState([
    "vegatable",
    "Fruits",
    "Salad",
    "Dal",
    "Roti",
    "Milk",
  ]);

  // console.log(`Current value of TextState ${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessege item={foodItems}></ErrorMessege>
      <FoodInput handelKeyDown={onKeyDown}></FoodInput>
      <ListItems item={foodItems}></ListItems>
    </Container>
  );
}

export default App;
