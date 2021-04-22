import React from "react";

import "./logo.style.scss";

const Logo = ({ src }) => {
    return (
        <div className="header-logo">
            <img src={src} alt="" />
        </div>
    );
};

export default Logo;
