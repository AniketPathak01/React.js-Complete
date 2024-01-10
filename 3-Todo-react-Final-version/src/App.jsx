import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components'/AppName";
import AddTodo from "./components'/AddTodo";
import TodoItem from "./components'/TodoItem";
import WelcomeMessage from "./components'/WelcomeMessege";

import "./App.css";
import { useState } from "react";

function App() {

  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} ${itemDueDate}`);
    let newTodoItem = [
      ...todoItem,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItem(newTodoItem);
  };

  const handleDeleteClicked = (todoItemName) =>{
    const newItem = todoItem.filter(item => item.name !== todoItemName);
    setTodoItem(newItem)

  }
  return (
    <>
      <div id="mainApp">
        <Appname></Appname>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        { todoItem.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItem todoItem={todoItem} onDeleteClick={handleDeleteClicked}></TodoItem>
      </div>
    </>
  );
}

export default App;
