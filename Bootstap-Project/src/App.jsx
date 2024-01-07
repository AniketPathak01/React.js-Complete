import ListItems from "./Components/ListItems";
import ErrorMessege from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //React Map Method

  let foodItems = ["vegatable", "Fruits", "Salad", "Dal", "Roti", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessege item={foodItems}></ErrorMessege>
      <ListItems item={foodItems}></ListItems>
    </>
  );
}

export default App;
