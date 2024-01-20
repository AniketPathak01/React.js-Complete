import "./App.css";
import { UserContext } from "./Context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";

import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
