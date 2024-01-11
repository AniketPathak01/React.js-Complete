function AddTodo() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-5">
          <input type="text" placeholder="Enter Tode here" />
        </div>
        <div class="col-5">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
