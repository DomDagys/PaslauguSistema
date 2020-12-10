import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert } from '@/_components';
import { Home } from '@/home';
import { Profile } from '@/profile';
import { Account } from '@/account';
import LandingPage from "../_components/LandingPage";
function App() {
    const { pathname } = useLocation();  
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    return (
        <div className={'app-container' + (user && ' bg-light')}>
            <Nav />
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <PrivateRoute exact path="/home" roles= {[Role.User,Role.FreeLancer,Role.Both]}component={Home} />
                <PrivateRoute path="/profile"  roles= {[Role.User,Role.Both,Role.FreeLancer]} component={Profile} />
                <Route path="/account" component={Account} />
                <Route path="/" component={LandingPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export { App }; 