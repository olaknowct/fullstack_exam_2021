import React from "react";
import { Switch, Route } from "react-router-dom";

import Logo from "./components/logo/logo.component";

import SignUpPage from "./pages/sign-up/sign-up.component";
import MainPage from "./pages/main/main.component";

import barberLogo from "./assets/img/logo/barber_time_logo.png";

import "./App.css";
import VerificationPage from "./pages/verification/verification.component";

const App = () => {
    return (
        <div className="app">
            <Logo src={barberLogo} />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/sign-up" component={SignUpPage} />
                <Route
                    path="/account-verification/:userHash"
                    component={VerificationPage}
                />
            </Switch>
        </div>
    );
};

export default App;
