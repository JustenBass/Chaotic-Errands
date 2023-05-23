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
    }

    return(
        <div>
        <NavLink
        to="/"
        exact
        style={linkStyling}
        activestyle={{
            background: 'pink'
        }}
        >
            Home
        </NavLink>

        <NavLink
        to="/people"
        exact
        style={linkStyling}
        activestyle={{
            background: 'pink'
        }}
        >
            People
        </NavLink>
    </div>
    )
}

export default Navigation