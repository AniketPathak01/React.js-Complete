
import ListItems from './Components/ListItems';
import ErrorMessege from './Components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  //React Map Method

  let foodItems = ['vegatable','Fruits','Salad','Dal','Roti','Milk'];
  //let foodItems = [];

  //Conditional renderning 
  //1)if else
  // if(foodItems.length === 0){
  //   return <h3>I am hungry</h3>
  // }

  //2)ternory operator
  //let ternoryOperator = foodItems.length === 0 ? <h3>I am hungry</h3> : null;
  return (
    <>
    <h1>Healthy Food</h1>
    <ErrorMessege items = {foodItems}></ErrorMessege>
    <ListItems items = {foodItems}></ListItems>

    </>
  )
}

export default App
