import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components'/AppName";
import AddTodo from "./components'/AddTodo";
import TodoItem from "./components'/TodoItem";
import WelcomeMessage from "./components'/WelcomeMessege";
import "./App.css";
import TodoItemContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemContextProvider>
      <div id="mainApp">
        <Appname />
        <AddTodo />
        <WelcomeMessage />
        <TodoItem />
      </div>
    </TodoItemContextProvider>
  );
}

export default App;
