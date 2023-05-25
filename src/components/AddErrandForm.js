import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AddErrandForm = ({currentPerson, setCurrentPerson, people, setPeople, setErrandFormFlag, addErrand}) => {

    const [errand, setErrand] = useState({
        errand: ""
    })

    const handleChange = (e) => (
        setErrand({
            [e.target.errand]: e.target.value
        })
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrand = {
            ...errand,
            person_id: currentPerson.id
        }
        addErrand(newErrand)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Errand..."
            value={errand.errand}
            onChange={handleChange}
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

