import './App.css';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"



function App() {


  return (
    <div className="App">
     
      <Route path="/" component={NavBar} />
      <Route exact path="/home" component={Home} />


    </div>
  );
}

export default App;