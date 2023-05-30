import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PersonErrands from "../components/PersonErrands";
import AddErrandForm from "../components/AddErrandForm";

const Person = ({people, setPeople}) => {
    const [currentPerson, setCurrentPerson] = useState({
        errands: [],
    })
    console.log("current person", currentPerson)
    console.log("current person errands", currentPerson.errands)
    const {name, age, location, account_created} = currentPerson
    const [errandFormFlag, setErrandFormFlag] = useState(false)
    const params = useParams()

    useEffect(() => {
        const selectedPerson = people.find(person => person.id == params.id)
        if(selectedPerson){
            setCurrentPerson(selectedPerson)
        }
    }, [people])


    const addErrand = (errand) => {
        fetch(`http://localhost:9292/errands`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(errand)
        })
        .then( r => r.json())
        .then( data => {
            console.log("New errand", data)
            const newErrand = {
                ...currentPerson,
                errands: [...currentPerson.errands, data]
            }
            setCurrentPerson(newErrand)
            const newErrands = people.map((person) => {
                if(person.id === data.person_id){
                    return newErrand
                } else {
                    return person
                }
            })
            setPeople(newErrands)
            setErrandFormFlag(false)
        })
    }


    const personDetails = currentPerson.errands.map((errand) =>
        <PersonErrands
        key={errand.id}
        errands={errand}
        people={people}
        setPeople={setPeople}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        />
    )

    return(
        <>
        <div className="welcome-div">
            <h1>Welcome Back {name}!</h1>
            <hr className="welcome-title"/>
            <h3>Location: {location}</h3>
            <h3>Age: {age}</h3>
            <h3>Member Since: {account_created}</h3>
            <br />

            <button onClick={() => setErrandFormFlag((errand) => !errand)}>Add New Errands!</button>
                {errandFormFlag ?
                <AddErrandForm
                currentPerson = {currentPerson}
                addErrand={addErrand}
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