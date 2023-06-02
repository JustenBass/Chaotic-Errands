import React, { useState } from "react";

const AddErrandForm = ({currentPerson, addErrand}) => {


    const [errandData, setErrandData] = useState({
        errand: "",
        date: "",
        time: "",
        daynight: "",
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
            <center>
            <input
            className="add-input"
            type="text"
            name="errand"
            placeholder="Tyoe errand..."
            onChange={handleErrandChange}
            value={errandData.errand}
            />

            <input
            className="add-input"
            type="text"
            name="date"
            placeholder="Date..."
            onChange={handleErrandChange}
            value={errandData.date}
            />

            <input
            className="add-input"
            type="text"
            name="time"
            placeholder="Time..."
            onChange={handleErrandChange}
            value={errandData.time}
            />

            <input
            className="add-input"
            type="text"
            name="am_pm"
            placeholder="am/pm..."
            onChange={handleErrandChange}
            value={errandData.am_pm}
            />




            <input
            className="add-input"
            type="text"
            name="location"
            placeholder="Location..."
            onChange={handleErrandChange}
            value={errandData.location}
            />

            <input
            className="add-input"
            type="text"
            name="address"
            placeholder="Address..."
            onChange={handleErrandChange}
            value={errandData.address}
            />

            {/* <input
            className="add-input"
            type="text"
            name="commute"
            placeholder="Commute..."
            onChange={handleErrandChange}
            value={errandData.commute}
            /> */}





            <input className="add-errand-button" type="submit"/>
            </center>

        </form>
    )
}

export default AddErrandForm
