import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components'/AppName";
import AddTodo from "./components'/AddTodo";
import TodoItem from "./components'/TodoItem";

import "./App.css";

function App() {
  const todoItem = [
    {
      name: "Buy a pen",
      dueDate: "10/01/2024",
    },
    {
      name: "Goto to college",
      dueDate: "10/01/2024",
    },
    {
      name: "go to gym",
      dueDate: "10/01/2024",
    },
  ];
  return (
    <>
      <div id="mainApp">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <TodoItem todoItem={todoItem}></TodoItem>
        
      </div>
    </>
  );
}

export default App;
