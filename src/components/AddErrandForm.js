import React, { useState } from "react";

const AddErrandForm = ({currentPerson, addErrand}) => {


    const [errandData, setErrandData] = useState({
        errand: "",
        date: "",
        time: "",
        location: "",
        address: "",
        commute:""
})

    const handleErrandChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setErrandData({
            ...errandData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrand = {
            ...errandData,
            person_id: currentPerson.id
        }
        addErrand(newErrand)
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="errand"
            placeholder="Errand..."
            onChange={handleErrandChange}
            value={errandData.errand}
            />

            <input
            type="text"
            name="date"
            placeholder="Date..."
            onChange={handleErrandChange}
            value={errandData.date}
            />

            <input
            type="text"
            name="time"
            placeholder="Time..."
            onChange={handleErrandChange}
            value={errandData.time}
            />

            <select onChange={""}>
            <option value="am">am</option>
            <option value="pm">pm</option>
            </select>

            <input
            type="text"
            name="location"
            placeholder="Location..."
            onChange={handleErrandChange}
            value={errandData.location}
            />

            <input
            type="text"
            name="address"
            placeholder="Address..."
            onChange={handleErrandChange}
            value={errandData.address}
            />

            <input
            type="text"
            name="commute"
            placeholder="Commute..."
            onChange={handleErrandChange}
            value={errandData.commute}
            />





            <input type="submit"/>

        </form>
    )
}

export default AddErrandForm
