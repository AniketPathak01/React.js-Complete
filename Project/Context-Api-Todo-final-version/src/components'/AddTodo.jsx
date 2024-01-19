import { useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemContext } from "../store/todo-item-store";

function AddTodo() {

  const {addNewItem} = useContext(TodoItemContext)
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Tode here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
