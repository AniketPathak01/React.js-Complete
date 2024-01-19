import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components'/AppName";
import AddTodo from "./components'/AddTodo";
import TodoItem from "./components'/TodoItem";
import WelcomeMessage from "./components'/WelcomeMessege";
import { TodoItemContext } from "./store/todo-item-store";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    let newTodoItem = [
      ...todoItem,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItem(newTodoItem);
  };

  const deleteItem = (todoItemName) => {
    const newItem = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newItem);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItem: todoItem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <div id="mainApp">
        <Appname/>
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItem/>
      </div>
    </TodoItemContext.Provider>
  );
}

export default App;
