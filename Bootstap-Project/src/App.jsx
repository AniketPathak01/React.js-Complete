import ListItems from "./Components/ListItems";
import ErrorMessege from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import "./App.css"
import FoodInput from "./Components/FoodInput";

function App() {
  //React Map Method

  let foodItems = ["vegatable", "Fruits", "Salad", "Dal", "Roti", "Milk"];
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessege item={foodItems}></ErrorMessege>
      <FoodInput></FoodInput>
      <ListItems item={foodItems}></ListItems>
    </Container>
  );
}

export default App;
