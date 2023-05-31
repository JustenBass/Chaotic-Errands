import React, { useState } from "react";

const EditErrandForm = ({editErrand, errands, currentPerson}) => {

    const {errand, date, time, location, address, commute} = errands

    const [errandData, setErrandData] = useState({
            errand: errand,
            date: date,
            time: time,
            location: location,
            address: address,
            commute: commute
        })

        console.log('errand-data', errandData)

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setErrandData({
                ...errandData,
                [name]: value,
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const editedErrand = {
                ...errandData,
                person_id: currentPerson.id
            }
            editErrand(editedErrand)
        }

    return(
        <form onSubmit={handleSubmit}>

        <input
        type="text"
        name="errand"
        placeholder="Errand..."
        onChange={handleChange}
        value={errandData.errand}
        />

        <input
        type="text"
        name="date"
        placeholder="MM/DD/YYYY"
        onChange={handleChange}
        value={errandData.date}
        />

        <input
        type="text"
        name="time"
        placeholder="Time..."
        onChange={handleChange}
        value={errandData.time}
        />

        <input
        type="text"
        name="location"
        placeholder="Location..."
        onChange={handleChange}
        value={errandData.location}
        />

        <input
        type="text"
        name="address"
        placeholder="Address..."
        onChange={handleChange}
        value={errandData.address}
        />

        <input
        type="text"
        name="commute"
        placeholder="Commute..."
        onChange={handleChange}
        value={errandData.commute}
        />

        <input type="submit" value="Save"/>
    </form>
    )
}

export default EditErrandForm