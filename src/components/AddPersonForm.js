import React, { useState } from "react";

const AddPersonForm = ( {addPerson} ) => {
    //people, setPeople
    const [person, setPerson] = useState({
        name: ""
    })




    const handleNameChange = (e) => {
        setPerson({
            [e.target.name]: e.target.value
        })
    }

    const handleAgeChange = (e) => {
        setPerson({
            [e.target.age]: e.target.value,
        })
    }


    const handleLocationChange = (e) => {
        setPerson({
            [e.target.location]: e.target.value
        })
    }

    const handleAccountChange = (e) => {
        setPerson({
            [e.target.account_created]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(person)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Name..."
            value={person.name}
            onChange={handleNameChange}
            />

            <input
            type="text"
            name="age"
            placeholder="Age..."
            value={person.age}
            onChange={handleAgeChange}
            />

            <input
            type="text"
            name="location"
            placeholder="Location..."
            value={person.location}
            onChange={handleLocationChange}
            />

            <input
            type="text"
            name="date"
            placeholder="Date..."
            value={person.account_created}
            onChange={handleAccountChange}
            />

            <button type="submit">Join</button>
            </form>
        </div>
    )

}

export default AddPersonForm






