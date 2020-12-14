import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Role } from "@/_helpers";
import { accountService } from "@/_services";
import { Nav, PrivateRoute, Alert } from "@/_components";
import { Home } from "@/home";
import { Profile } from "@/profile";
import { Account } from "@/account";
import { AdminPage } from "../admin";
import LandingPage from "../_components/LandingPage";
import ListingsPage from "../_components/ListingsPage";
import ListingPage from "../_components/ListingPage";
import ChatUsers from "../_components/ChatSystem/ChatUsers";
import { PostList } from "../_components/PostingPage/PostList";
import { NewPost } from "../_components/PostingPage/NewPost";
import { EditPost } from "../_components/PostingPage/EditPost";

function App() {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe((x) => setUser(x));
    return subscription.unsubscribe;
  }, []);

  return (
    <div className={"app-container" + (user && " bg-light")}>
      <Nav />
      <Alert />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <PrivateRoute
          exact
          path="/home"
          roles={[Role.User, Role.FreeLancer, Role.Both, Role.Admin]}
          component={Home}
        />
        <PrivateRoute
          path="/profile"
          roles={[Role.User, Role.Both, Role.FreeLancer, Role.Admin]}
          component={Profile}
        />
        <PrivateRoute exact path="/admin" roles={[Role.Admin]} component={AdminPage} />
        <Route path="/account" component={Account} />
        <Route exact path="/pokalbiai">
          <ChatUsers />
        </Route>
        <Route exact path="/listings/:kind/:keyword" component={ListingsPage}></Route>
        <Route exact path="/listings/search" component={ListingsPage}></Route>
        <Route exact path="/listings/:id" component={ListingPage}></Route>
        <Route path="/postlist">
          <PostList />
        </Route>
        <Route path="/newpost">
          <NewPost />
        </Route>
        <Route path="/editpost">
          <EditPost />
        </Route>
        <Route path="/" component={LandingPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export { App };
