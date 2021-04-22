import React from "react";

import { Link } from "react-router-dom";

import "./main.styles.scss";
const MainPage = () => {
    return (
        <div className="main-page">
            <Link className="section" to="/sign-up">
                Click Me and Sign up!
            </Link>
        </div>
    );
};

export default MainPage;
