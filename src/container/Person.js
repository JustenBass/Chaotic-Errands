import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PersonErrands from "../components/PersonErrands";


const Person = ({people, setPeople}) => {
    const [currentPerson, setCurrentPerson] = useState({errands: []})
    const {name, location, account_created} = currentPerson
    const params = useParams()

    useEffect(() => {
        const person = people.find((person) => person.id == params.id)
        if(person){
            setCurrentPerson(person)
        }
    }, [people])

    const personDetails = currentPerson.errands.map(person =>
        <PersonErrands
        key={person.id}
        person={person}
        />
    )

    return(
        <div>
            <h1>Welcome back {name}!</h1>
            <h3>Location: {location}</h3>
            <h3>Member Since: {account_created}</h3>

            <div>
            {personDetails}
            </div>
        </div>
    )
}

export default Person