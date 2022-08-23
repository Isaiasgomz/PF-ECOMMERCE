import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import FAQs from "./components/FAQs/FAQs";
import ShoppingCar from "./components/ShoppingCar/ShoppingCar";
import Order from "./components/Order/Order";
import Payment from "./components/Payment/Payment";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Detail from "./components/Detail/Detail";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import Success from "./components/Success/Success";
import ResumeOrder from "./components/ResumeOrder/ResumeOrder";
import ContextProvider from "./components/contexto/contextProvider";
import AdminProducts from "./components/AdminProducts/AdminProducts";
import UserPanel from "./components/UserPanel/UserPanel";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Route path={"/"} component={NavBar} />
        <Route exact path={"/"} component={Landing} />
        <Route path={"/"} component={Footer} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/FAQs"} component={FAQs} />
        <Route exact path={"/help"} component={Help} />
        <Route exact path={"/shoppingCar"} component={ShoppingCar} />
        <Route exact path={"/order"} component={Order} />
        <Route exact path={"/payment"} component={Payment} />
        <Route exact path={"/createProduct"} component={CreateProduct} />
        <Route exact path={"/resumeOrder"} component={ResumeOrder} />
        <Route exact path={"/cart"} component={ShoppingCar} />
        <Route exact path={"/sign"} component={SignUp} />
        <Route exact path={"/payment/success"} component={Success} />
        <Route path={"/notfound"} component={NotFound} />
        <Route path={"/adminProducts"} component={AdminProducts} />
        <Route exact path={"/userPanel"} component={UserPanel} />
      </ContextProvider>
    </div>
  );
}

export default App;
