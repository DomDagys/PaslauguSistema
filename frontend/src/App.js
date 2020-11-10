import logo from "./logo.svg";
import { NavBar } from "./components";
import { HomePage, AdminPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { ViewProfile } from "./components/ViewProfile";
import { EditProfile } from "./components/EditProfile";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route path="/" exact>
          <LandingPage />
        </Route>
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