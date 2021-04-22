import React from "react";
import { Switch, Route } from "react-router-dom";

import Logo from "./components/logo/logo.component";

import SignUpPage from "./pages/sign-up/sign-up.component";
import MainPage from "./pages/main/main.component";

import "./App.css";
import VerificationPage from "./pages/verification/verification.component";

const App = () => {
    return (
        <div className="app">
            <Logo />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/sign-up" component={SignUpPage} />
                <Route
                    exact
                    path="/account-verification"
                    component={VerificationPage}
                />
            </Switch>
        </div>
    );
};

export default App;
