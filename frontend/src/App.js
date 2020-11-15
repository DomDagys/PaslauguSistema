import logo from "./logo.svg";
import { NavBar } from "./components";
import { HomePage, AdminPage } from "./pages";
import { Router, Switch, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { ViewProfile } from "./components/ViewProfile";
import { EditProfile } from "./components/EditProfile";
import LandingPage from "./components/LandingPage";
import ListingsPage from "./components/ListingsPage";
import History from "./History";
import ListingPage from "./components/ListingPage";

function App() {
  return (
    <Router history={History}>
      <div className="App">
        <NavBar></NavBar>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route exact path="/listings">
          <ListingsPage></ListingsPage>
        </Route>
        <Route path="/listings/:id" component={ListingPage}></Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/viewprofile">
          <ViewProfile />
        </Route>
        <Route path="/editprofile">
          <EditProfile />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
