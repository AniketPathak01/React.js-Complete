import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";

function Controle() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAddition = () => {
    dispatch(counterAction.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtraction = () => {
    dispatch(counterAction.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div>
        <input type="text" placeholder="Enter number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controle;
