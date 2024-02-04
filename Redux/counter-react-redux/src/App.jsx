import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controle from "./components/Controle";

function App() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <Header />
      <div class="col-lg-6 mx-auto">
        <DisplayCounter />
        <Controle />
      </div>
    </div>
  );
}

export default App;
