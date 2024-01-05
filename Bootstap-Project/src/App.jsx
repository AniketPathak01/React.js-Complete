
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
      <ul className="list-group">
        //Logical operator
        {foodItems.length === 0 && <h3>I am hungry</h3>}
        
        {foodItems.map((items) =>(<li key={items} className="list-group-item">{items}</li>))}
      </ul>
    </>
  )
}

export default App
