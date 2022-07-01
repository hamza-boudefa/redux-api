import {BrowserRouter ,Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import Home from "./components/Home";
import EditCard from "./components/AddCard";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" > <Home/> </Route>
        <Route path="/UsersList" ><UsersList/> </Route>
      </Switch>
    </div>
  );
}

export default App;
