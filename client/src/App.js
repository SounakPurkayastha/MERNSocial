import Home from "./pages/Home";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Route path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;
