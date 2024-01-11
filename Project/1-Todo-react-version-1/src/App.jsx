import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components'/AppName";
import AddTodo from "./components'/AddTodo";
import AddList1 from "./components'/AddList1";
import AddList2 from "./components'/AddList2";
import "./App.css";

function App() {
  return (
    <>
      <div id="mainApp">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <AddList1></AddList1>
        <AddList2></AddList2>
      </div>
    </>
  );
}

export default App;
