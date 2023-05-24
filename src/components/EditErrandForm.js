import React, { useState } from "react";

const EditErrandForm = ({personErrands, handleUpdate}) => {
    const {id, errand, date, time, location, address, commute} = personErrands

    const [errands, setErrands] = useState(errand)
    const [dates, setDates] = useState(date)
    const [times, setTimes] = useState(time)
    const [locationName, setLocationName] = useState(location)
    const [addressLocation, setAddressLocation] = useState(address)
    const [commuteTime, setCommuteTime] = useState(commute)

    function handleSubmit(e){
        e.preventDefault()

        const edit = {
            errand: errands,
            date: dates,
            time: times,
            location: locationName,
            address: addressLocation,
            commute: commuteTime
        }
        // debugger

        fetch(`http://localhost:9292/errands/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(edit)
        })
        .then((r) => r.json())
        .then((updatedErrand) => handleUpdate(updatedErrand))
    }

    return(
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="errands"
        placeholder="Errand..."
        value={errands}
        onChange={(e) => setErrands(e.target.value)}
        />

        <input
        type="text"
        name="dates"
        placeholder="MM/DD/YYYY"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        />

        <input
        type="text"
        name="times"
        placeholder="Time..."
        value={times}
        onChange={(e) => setTimes(e.target.value)}
        />

        <input
        type="text"
        name="locationName"
        placeholder="Location..."
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        />

        <input
        type="text"
        name="address"
        placeholder="Address..."
        value={addressLocation}
        onChange={(e) => setAddressLocation(e.target.value)}
        />

        <input
        type="text"
        name="commuteTime"
        placeholder="Commute..."
        value={commuteTime}
        onChange={(e) => setCommuteTime(e.target.value)}
        />

        <input type="submit" value="Save"/>
    </form>
    )
}

export default EditErrandForm