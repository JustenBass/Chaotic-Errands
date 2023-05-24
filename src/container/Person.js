import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PersonErrands from "../components/PersonErrands";
import AddErrandForm from "../components/AddErrandForm";

const Person = ({people, setPeople}) => {
    const [currentPerson, setCurrentPerson] = useState({errands: []})
    const {name, location, account_created} = currentPerson
    const [errandFormFlag, setErrandFormFlag] = useState(false)
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
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        />
    )

    return(
        <>
        <div className="welcome-div">
            <h1>Welcome back {name}!</h1>
            <h3>Location: {location}</h3>
            <h3>Member Since: {account_created}</h3>
            <br />

            <button onClick={() => setErrandFormFlag((errand) => !errand)}>Add New Errands!</button>
                {errandFormFlag ?
                <AddErrandForm
                currentPerson = {currentPerson}
                setCurrentPerson = {setCurrentPerson}
                people={people}
                setPeople={setPeople}
                setErrandFormFlag={setErrandFormFlag}
                /> : null}
        </div>

        <div className="person-detail-div">
            <center><h2>TO DO LIST</h2></center>
            {personDetails}
        </div>
        </>
    )
}

export default Person