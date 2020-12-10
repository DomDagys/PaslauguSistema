import logo from "./logo.svg";
import { Nav } from "./components";
import { HomePage, AdminPage } from "./pages";
import { Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ListingsPage from "./components/ListingsPage";
import {history} from "./_helpers";
import ListingPage from "./components/ListingPage";
import ChatUsers from './components/ChatSystem/ChatUsers';
import { PostList } from "./components/PostingPage/PostList";
import { NewPost } from "./components/PostingPage/NewPost";
import { EditPost } from "./components/PostingPage/EditPost";
import { Account } from './account';
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route exact path="/listings">
          <ListingsPage></ListingsPage>
        </Route>
        <Route exact path="/pokalbiai">
          <ChatUsers/>
        </Route>
        <Route path="/listings/:id" component={ListingPage}></Route>
        <Route path="/admin">
          <AdminPage />
          </Route>
		<Route path="/postlist">
          <PostList />
        </Route>  
		<Route path="/newpost">
          <NewPost />
        </Route>
		<Route path="/editpost">
          <EditPost />
        </Route>
      </div>
    </Router>
  );
}

export default App;
