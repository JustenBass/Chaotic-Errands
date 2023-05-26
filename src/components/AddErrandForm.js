import React, { useState } from "react";
import { useParams } from "react-router-dom";

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






























//     const [errand, setErrand] = useState("")
//     const [date, setDate] = useState("")
//     const [time, setTime] = useState("")
//     const [location, setLocation] = useState("")
//     const [address, setAddress] = useState("")
//     const [commuteTime, setCommuteTime] = useState("")
//     const {id} = useParams()

//     function handleAdd(newErrand){
//         const personMatch = people.map((person) => {
//             if(person.id == newErrand.person_id){
//                 const newErrands = [...person.errands, newErrand]
//                 const updatedPerson = {...person, errands: newErrands}
//                 return updatedPerson
//             } else {
//                 return person
//             }
//         });
//         setPeople(personMatch)
//             setErrandFormFlag(false)
//     };

//     // function handleAddComplete(newErrand){
//     //     setErrandFormFlag(false)
//     //     handleAdd(newErrand)
//     // }

//     function handleSubmit(e){
//         e.preventDefault();
//         const addedErrand = {
//             errand: errand,
//             date: date,
//             time: time,
//             location: location,
//             address: address,
//             commute: commuteTime,
//             person_id: id
//         }

//         fetch("http://localhost:9292/errands", {
//             method: "POST",
//             headers:{
//                 "Content-Type" : "application/json",
//             },
//             body: JSON.stringify(addedErrand),
//         })
//         .then((r) => r.json())
//         .then((newErrand) => {
//             handleAdd(newErrand)
//             setErrand('')
//             setDate('')
//             setTime('')
//             setLocation('')
//             setAddress('')
//             setCommuteTime('')
//         })
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//         <input
//         type="text"
//         name="errand"
//         placeholder="Errand..."
//         value={errand}
//         onChange={(e) => setErrand(e.target.value)}
//         />

//         <input
//         type="text"
//         name="date"
//         placeholder="MM/DD/YYYY"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         />

//         <input
//         type="text"
//         name="time"
//         placeholder="Time..."
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         />


//         <input
//         type="text"
//         name="location_name"
//         placeholder="Location..."
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         />

//         <input
//         type="text"
//         name="address"
//         placeholder="Address..."
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         />

//         <input
//         type="text"
//         name="commute_time"
//         placeholder="Commute Time..."
//         value={commuteTime}
//         onChange={(e) => setCommuteTime(e.target.value)}
//         />



//         <button type="submit">Add!</button>
//        </form>
//     )
// }

