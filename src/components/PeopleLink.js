import React from "react";
import { Link } from "react-router-dom";

const PeopleLink = ({people}) => {
    return(
        <div className="link-div">
            <Link className="link" to={`/people/${people.id}`}>
                <h2>{people.name}</h2>
            </Link>
        </div>
    )
}

export default PeopleLink