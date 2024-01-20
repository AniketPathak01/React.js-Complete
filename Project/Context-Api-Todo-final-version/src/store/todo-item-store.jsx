import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  todoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItemState, action) => {
  let newTodoItem = currTodoItemState;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItemState,
      {
        name: action.playload.itemName,
        dueDate: action.playload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItemState.filter(
      (item) => item.name !== action.playload.itemName
    );
  }
  return newTodoItem;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItem, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      playload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };
  return (
    <TodoItemContext.Provider
      value={{
        todoItem: todoItem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
