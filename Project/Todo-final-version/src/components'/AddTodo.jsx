import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div classNameName="container mt-5">
      <div classNameName="row">
        <div classNameName="col-5">
          <input
            type="text"
            placeholder="Enter Tode here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div classNameName="col-5">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success kg-button"
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
