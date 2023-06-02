import React, { useState } from "react";

const EditErrandForm = ({editErrand, errands, currentPerson}) => {

    const {errand, date, time, am_pm, location, address} = errands

    const [errandData, setErrandData] = useState({
            errand: errand,
            date: date,
            time: time,
            am_pm: am_pm,
            location: location,
            address: address,
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
        <label className="edit-errand-label">
            Errand:
        <input
        className="edit-errand-input"
        type="text"
        name="errand"
        placeholder="Errand..."
        onChange={handleChange}
        value={errandData.errand}
        />
        </label>

        <label className="edit-errand-label">
            Date:
        <input
        className="edit-errand-input"
        type="text"
        name="date"
        placeholder="MM/DD/YYYY"
        onChange={handleChange}
        value={errandData.date}
        />
        </label>

        <label className="edit-errand-label">
            Time:
        <input
        className="edit-errand-input"
        type="text"
        name="time"
        placeholder="Time..."
        onChange={handleChange}
        value={errandData.time}
        />
        </label>

        <label className="edit-errand-label">
            am/pm
        <input
        className="edit-errand-input"
        type="text"
        name="am_pm"
        placeholder="a.m/p.m..."
        onChange={handleChange}
        value={errandData.am_pm}
        />
        </label>

        <label className="edit-errand-label">
            Location:
        <input
        className="edit-errand-input"
        type="text"
        name="location"
        placeholder="Location..."
        onChange={handleChange}
        value={errandData.location}
        />
        </label>

        <label className="edit-errand-label">
            Address:
        <input
        className="edit-errand-input"
        type="text"
        name="address"
        placeholder="Address..."
        onChange={handleChange}
        value={errandData.address}
        />
        </label>

        <div>
            <center>
            <button className="edit-errand-save-button" type="submit">Save</button>
            </center>
            </div>
    </form>
    )
}

export default EditErrandForm