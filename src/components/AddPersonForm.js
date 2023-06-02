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
        <div className="add-form">
            <form onSubmit={handleSubmit}>

            <center>
            <input
            className="add-input"
            type="text"
            name="name"
            placeholder="Type name..."
            onChange={handleChange}
            value={personData.name}
            />

            <input
            className="add-input"
            type="text"
            name="age"
            placeholder="Type age..."
            onChange={handleChange}
            value={personData.age}
            />

            <input
            className="add-input"
            type="text"
            name="location"
            placeholder="Type location..."
            onChange={handleChange}
            value={personData.location}
            />

            <input
            className="add-input"
            type="text"
            name="account_created"
            placeholder="Type MM/DD/YY"
            onChange={handleChange}
            value={personData.account_created}
            />

          <button className="add-form-button" type="submit">Click To Join!</button></center>

            </form>
        </div>
    )

}

export default AddPersonForm






