import React from "react";
import { Link } from "react-router-dom";

const PeopleLink = ({people}) => {
    return(
        <div className="link-div">
            <Link className="link" to={`/people/${people.id}`}>
                <div className="name-link">
                <h2>{people.name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PeopleLink