import "./App.css";
import { Route, Switch } from "react-router-dom";
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
import AdminUpdate from "./components/AdminUpdate/AdminUpdate";
import AdminUsers from "./components/AdminUsers/AdminUsers";
import AdminNewUser from "./components/AdminNewUser/AdminNewUser";
import AdminSideBar from "./components/AdminSideBar/AdminSideBar";
import AdminCreateAdmin from "./components/AdminCreateAdmin/AdminCreateAdmin";
import UserPanel from "./components/UserPanel/UserPanel";
import UserMyOrders from "./components/UserMyOrders/UserMyOrders";
import UserData from "./components/UserPanel/UserData/UserData";
import UpdateUserData from "./components/UserPanel/UpdateUserData/UpdateUserData";
import UserShippingAddress from "./components/UserPanel/UserShippingAddress/UserShippingAddress";
import UserAllAddresses from "./components/UserPanel/UserAllAddresses/UserAllAddresses";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import UserOrderDetail from "./components/UserOrderDetail/UserOrderDetail";
import UpdateShippingAddress from "./components/UserPanel/UpdateShippingAddress/UpdateShippingAddress";
import UserReviews from "./components/UserPanel/UserReviews/UserReviews";
import BrandSelector from "./components/BranchSelector/BrandSelector";
import ProcessorSelector from "./components/BranchSelector/ProcessorSelector";
import AdminCategory from "./components/AdminCategory/AdminCategory";
import AdminOrders from "./components/AdminOrders/AdminOrders";
import AdminOrderEdit from "./components/AdminOrderEdit/AdminOrderEdit";
import AdminDashboard from "./components/AdminDashboard/Dashboard";
import DashboardSold from "./components/AdminDashboard/DashboardSold";
import CreateCategory from "./components/AdminCreateCategory/CreateCategory";
import UsertProfile from "./components/UserPanel/UserProfile";
import PresentationCard from "./components/UserPanel/PresentationCard/PresentationCard";
import Favourites from "./components/Favourites/Favourites";

import OrderInfo from "./components/Order/OrderInfo";

import AdminQuestions from "./components/AdminQuestions/AdminQuestions";
import AdminAnswer from "./components/AdminAnswer/AdminAnswer";

import BuildPerif from "./components/BranchSelectorPerif/BuildPerif";

import AdminDiscount from "./components/AdminDiscount/AdminDiscount";

import EditDiscount from "./components/AdminDiscount/EditDiscount";

import UpdateAddres from "./components/UserPanel/UserAllAddresses/UpdateAddres";
import UserAllAddressesOrder from "./components/Order/OrderAddresses/UserAllAddressesOrder";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Switch>
          <Route exact path={"/"}>
            <NavBar></NavBar>
            <Landing></Landing>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/FAQs"}>
            <FAQs></FAQs>
            <Footer></Footer>
          </Route>
          <Route exact path={"/help"}>
            <Help></Help>
            <Footer></Footer>
          </Route>
          <Route exact path={"/about"}>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path={"/home"}>
            <NavBar></NavBar>
            <Home></Home>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/detail/:id"}>
            <NavBar></NavBar>
            <Footer></Footer>
            <UserPanel></UserPanel>
            <Detail></Detail>
          </Route>
          <Route exact path={"/build/:brand"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <ProcessorSelector></ProcessorSelector>
            <Footer></Footer>
          </Route>
          <Route exact path={"/build"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <BrandSelector></BrandSelector>
            <Footer></Footer>
          </Route>
          <Route exact path={"/perif"}>
            <NavBar></NavBar>
            <BuildPerif></BuildPerif>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/cart"}>
            <NavBar></NavBar>
            <ShoppingCar></ShoppingCar>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/shoppingCar"}>
            <NavBar></NavBar>
            <ShoppingCar></ShoppingCar>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/resumeOrder"}>
            <NavBar></NavBar>
            <ResumeOrder></ResumeOrder>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/orderInfo"}>
            <NavBar></NavBar>
            <OrderInfo></OrderInfo>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/userShippingAddress"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <UserShippingAddress></UserShippingAddress>
            <Footer></Footer>
          </Route>
          <Route exact path={"/payment"}>
            <NavBar></NavBar>
            <Payment></Payment>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/payment/success"}>
            <NavBar></NavBar>
            <Success></Success>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/Favourites"}>
            <NavBar></NavBar>
            <Favourites></Favourites>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/userData"}>
            <NavBar></NavBar>
            <Footer></Footer>
            <UserData></UserData>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/updateUserData"}>
            <NavBar></NavBar>
            <UpdateUserData></UpdateUserData>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/updateAddres/:id"}>
            <NavBar></NavBar>
            <UpdateAddres></UpdateAddres>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/userAllAddresses"}>
            <NavBar></NavBar>
            <UserAllAddresses></UserAllAddresses>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/myOrders"}>
            <NavBar></NavBar>
            <UserMyOrders></UserMyOrders>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/orderDetail/:PurchaseOrderOrderN"}>
            <NavBar></NavBar>
            <UserOrderDetail></UserOrderDetail>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/myReviews"}>
            <NavBar></NavBar>
            <UserReviews></UserReviews>
            <Footer></Footer>
            <UserPanel></UserPanel>
          </Route>
          <Route exact path={"/presentationCard"}>
            <NavBar></NavBar>
            <PresentationCard></PresentationCard>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminUsers"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminUsers></AdminUsers>
            <Footer></Footer>
          </Route>
          <Route exact path={"/admin/createAdmin"}>
            <UserPanel></UserPanel>
            <AdminCreateAdmin></AdminCreateAdmin>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminDashboard"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminDashboard></AdminDashboard>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminProducts"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminProducts></AdminProducts>
            <Footer></Footer>
          </Route>
          <Route exact path={"/admin/update/:id"}>
            <UserPanel></UserPanel>
            <AdminUpdate></AdminUpdate>
            <Footer></Footer>
          </Route>
          <Route exact path={"/createProduct"}>
            <UserPanel></UserPanel>
            <CreateProduct></CreateProduct>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminOrders"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminOrders></AdminOrders>
            <Footer></Footer>
          </Route>
          <Route exact path={"/order/update/:id"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminOrderEdit></AdminOrderEdit>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminCategory"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminCategory></AdminCategory>
            <Footer></Footer>
          </Route>
          <Route exact path={"/createCategory"}>
            <UserPanel></UserPanel>
            <CreateCategory></CreateCategory>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminPreguntas"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminQuestions></AdminQuestions>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminPreguntas/update/:id"}>
            <NavBar></NavBar>
            <UserPanel></UserPanel>
            <AdminAnswer></AdminAnswer>
            <Footer></Footer>
          </Route>
          <Route exact path={"/Order"}>
            <Order></Order>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/userAllAddressesOrder"}>
            <UserAllAddressesOrder></UserAllAddressesOrder>
          </Route>
          <Route exact path={"/adminDiscount"}>
            <NavBar></NavBar>
            <AdminDiscount></AdminDiscount>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/adminDiscount/editDiscount/:id"}>
            <NavBar></NavBar>
            <EditDiscount></EditDiscount>
            <UserPanel></UserPanel>
            <Footer></Footer>
          </Route>
          <Route exact path={"/*"}>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;

{
  /* <Route path={"/"} component={NavBar} />
        <Route path={"/"} component={UserPanel} />
        <Route exact path={"/"} component={Landing} />
        <Route path={"/"} component={Footer} />
        <Route exact path={"/build"} component={BrandSelector} />
        <Route path={"/build/:brand"} component={ProcessorSelector} />
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
        <Route exact path={"/payment/success"} component={Success} />
        <Route exact path={"/userPanel"} component={UsertProfile} />
        <Route exact path={"/presentationCard"} component={PresentationCard} />
        <Route exact path={"/userData"} component={UserData} />
        <Route exact path={"/updateUserData"} component={UpdateUserData} />
        <Route
          exact
          path={"/userShippingAddress"}
          component={UserShippingAddress}
        />
        <Route exact path={"/userAllAddresses"} component={UserAllAddresses} />
        <Route
          exact
          path={"/updateShippingAddress"}
          component={UpdateShippingAddress}
        />

        <Route exact path={"/Favourites"} component={Favourites} />

        <Route exact path={"/orderInfo"} component={OrderInfo} />

        <Route path={"/myReviews"} component={UserReviews} />
        <Route exact path={"/myOrders"} component={UserMyOrders} />
        <Route
          exact
          path={"/orderDetail/:PurchaseOrderOrderN"}
          component={UserOrderDetail}
        />
        <Route exact path={"/admin/createAdmin"} component={AdminCreateAdmin} />
        <Route path={"/admin/update/:id"} component={AdminUpdate} />
        <Route path={"/notfound"} component={NotFound} />
        <Route path={"/adminProducts"} component={AdminProducts} />
        <Route exact path={"/adminUsers"} component={AdminUsers} />
        <Route exact path={"/signUp"} component={SignUp} />
        <Route exact path={"/sideBar"} component={AdminSideBar} />
        <Route exact path={"/perif"} component={BuildPerif} />
        <Route exact path={"/profile"} component={AdminProfile} />
        <Route exact path={"/adminCategory"} component={AdminCategory} />
        <Route exact path={"/adminOrders"} component={AdminOrders} />
        <Route exact path={"/order/update/:id"} component={AdminOrderEdit} />
        <Route exact path={"/adminDashboard"} component={AdminDashboard} />
        <Route exact path={"/sold"} component={DashboardSold} />
        <Route exact path={"/createCategory"} component={CreateCategory} />
        <Route exact path={"/adminPreguntas"} component={AdminQuestions} />
        <Route
          exact
          path={"/adminPreguntas/update/:id"}
          component={AdminAnswer}
        />

        <Route exact path={"/adminDiscount"} component={AdminDiscount} />
        <Route
          exact
          path={"/adminDiscount/editDiscount/:id"}
          component={EditDiscount}
        />

        <Route exact path={"/updateAddres/:id"} component={UpdateAddres} />

        <Route
          exact
          path={"/userAllAddressesOrder"}
          component={UserAllAddressesOrder}
        /> */
}
