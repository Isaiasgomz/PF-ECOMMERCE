import './App.css';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';



function App() {


  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/category/:category" component={Home} />
      <Route exact path="/" component={Landing} />
      <Route path={"/"} component={Footer}/>

    </div>
  );
}

export default App;