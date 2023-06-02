import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PersonErrands from "../components/PersonErrands";
import AddErrandForm from "../components/AddErrandForm";

const Person = ({people, setPeople}) => {
    const [currentPerson, setCurrentPerson] = useState({
        errands: [],
    });
    console.log("current person", currentPerson)
    console.log("current person errands", currentPerson.errands)
    const {name, age, location, account_created} = currentPerson;
    const [errandFormFlag, setErrandFormFlag] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const selectedPerson = people.find(person => person.id == id)
        if(selectedPerson){
            setCurrentPerson(selectedPerson)
        }
    }, [people]);


    const addErrand = (errand) => {
        fetch(`http://localhost:9292/people/${id}/errands`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(errand)
        })
        .then( r => r.json())
        .then( data => {
            console.log("New errand", data)
            const personNewErrandPost = {
                ...currentPerson,
                errands: [...currentPerson.errands, data]
            }
            setCurrentPerson(personNewErrandPost);

            const peopleAddNewErrand = people.map((person) => {
                if(person.id === data.person_id){
                    console.log("look", person)
                    return personNewErrandPost
                } else {
                    return person
                }
            })
            setPeople(peopleAddNewErrand);
            console.log("look2", peopleAddNewErrand)
            setErrandFormFlag(false);
        });
    };


    const personDetails = currentPerson.errands.map((errand) =>
        <PersonErrands
        key={errand.id}
        errands={errand}
        people={people}
        setPeople={setPeople}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        />
    );

    return(
    <>
    <div className="welcome-div">
        <center><h1>Welcome Back {name}!</h1></center>
        <center><hr className="welcome-title"/></center>

        <center><h3>Location: {location}</h3></center>
        <center><h3>Age: {age}</h3></center>
        <center><h3>Member Since: {account_created}</h3></center>
        <br />

        <center>
            <button className="add-errand-button" onClick={() => setErrandFormFlag((errand) => !errand)}>Add New Errands!</button>
        </center>

        {errandFormFlag ?
        <AddErrandForm
        currentPerson={currentPerson}
        addErrand={addErrand}
        /> : null}
    </div>

    <div className="person-detail-div">
        <center><h1>TO DO LIST</h1></center>
        <hr/>
        {personDetails}
    </div>
    </>
    );
};

export default Person