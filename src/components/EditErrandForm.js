import React, { useState } from "react";

const EditErrandForm = ({personErrands, handleUpdate, editErrand, currentPerson}) => {
    const {id, errand, date, time, location, address, commute} = personErrands

    // const [errands, setErrands] = useState(errand)
    // const [dates, setDates] = useState(date)
    // const [times, setTimes] = useState(time)
    // const [locationName, setLocationName] = useState(location)
    // const [addressLocation, setAddressLocation] = useState(address)
    // const [commuteTime, setCommuteTime] = useState(commute)

    const [errandData, setErrandData] = useState({
            errand: '',
            date: '',
            time: '',
            location: '',
            address: '',
            commute: ''
        })

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

    // function handleSubmit(e){
    //     e.preventDefault()

    //     const edit = {
    //         errand: errands,
    //         date: dates,
    //         time: times,
    //         location: locationName,
    //         address: addressLocation,
    //         commute: commuteTime
    //     }
    //     // debugger

    //     fetch(`http://localhost:9292/errands/${id}`, {
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(edit)
    //     })
    //     .then((r) => r.json())
    //     .then((updatedErrand) => handleUpdate(updatedErrand))
    // }

    return(
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="errand"
        placeholder="Errand..."
        onChange={handleChange}
        value={errand}
        />

        <input
        type="text"
        name="date"
        placeholder="MM/DD/YYYY"
        onChange={handleChange}
        value={date}
        />

        <input
        type="text"
        name="time"
        placeholder="Time..."
        onChange={handleChange}
        value={time}
        />

        <input
        type="text"
        name="location"
        placeholder="Location..."
        onChange={handleChange}
        value={location}
        />

        <input
        type="text"
        name="address"
        placeholder="Address..."
        onChange={handleChange}
        value={address}
        />

        <input
        type="text"
        name="commute"
        placeholder="Commute..."
        onChange={handleChange}
        value={commute}
        />

        <input type="submit" value="Save"/>
    </form>
    )
}

export default EditErrandForm