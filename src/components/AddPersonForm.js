import React, { useState } from "react";

const AddPersonForm = ( {addPerson} ) => {
    //people, setPeople
    const [personData, setPersonData] = useState({
        name: "",
        age: "",
        location: "",
        account_created: ""
    })


function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setPersonData({
        ...personData,
        [name]: value,
    });
}

    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(personData)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            value={personData.name}
            />

            <input
            type="text"
            name="age"
            placeholder="Age..."
            onChange={handleChange}
            value={personData.age}
            />

            <input
            type="text"
            name="location"
            placeholder="Location..."
            onChange={handleChange}
            value={personData.location}
            />

            <input
            type="text"
            name="account_created"
            placeholder="Date..."
            onChange={handleChange}
            value={personData.account_created}
            />

            <button type="submit">Join</button>
            </form>
        </div>
    )

}

export default AddPersonForm






