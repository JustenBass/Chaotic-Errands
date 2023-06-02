import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const linkStyling = {
        display: "inline-block",
        width: "300px",
        padding: "40px",
        margin:"0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
    };

    return(
    <div>
        <NavLink
        to="/"
        exact
        style={linkStyling}
        >
            HOME
        </NavLink>

        <NavLink
        to="/people"
        exact
        style={linkStyling}
        >
            USERS
        </NavLink>
    </div>
    );
};

export default Navigation