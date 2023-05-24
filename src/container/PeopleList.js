import React, { useState } from "react";
import PeopleLink from "../components/PeopleLink";
import AddPersonForm from "../components/AddPersonForm";

const PeopleList = ({people, setPeople}) => {

    const [personFormFlag, setPersonFormFlag] = useState(false)

    const addPerson = (person) => {
        fetch(`http://localhost:9292/people`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(person)
        })
        .then((r) => r.json())
        .then((data) => {
            console.log("New Person", data)
            setPeople([...people, data])
        })
        setPersonFormFlag(false)
    }

    const toggleAddPersonForm = (e) => {
        console.log(e.target)
        setPersonFormFlag(true)
    }

    const personLink = people.map((person) => <PeopleLink key={person.id} people={person}/>)


    return(
        <div>
            {personFormFlag ? <AddPersonForm addPerson={addPerson}/> : <button onClick={toggleAddPersonForm}>Add A Person!</button>}

            <div>{personLink}</div>

            {/* <div>
                <h2>Join Us Here!</h2>
                {<AddPersonForm
                people={people}
                setPeople={setPeople}/>}
            </div> */}

        </div>
    )
}

export default PeopleList