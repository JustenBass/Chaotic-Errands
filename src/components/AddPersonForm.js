import React, { useState } from "react";

const AddPersonForm = ( {addPerson} ) => {
    //people, setPeople
    const [person, SetPerson] = useState({
        name: "",
        age: "",
        location: "",
        account_created: ""
    })

    const handleNameChange = (e) => {
        SetPerson({
            [e.target.name]: e.target.value
        })
    }

    const handleAgeChange = (e) => {
        SetPerson({
            [e.target.age]: e.target.value
        })
    }

    const handleLocationChange = (e) => {
        SetPerson({
            [e.target.location]: e.target.value
        })
    }

    const handleAccountChange = (e) => {
        SetPerson({
            [e.target.account_created]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(person)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Name..."
            value={person.name}
            onChange={handleNameChange}
            />

            <input
            type="text"
            name="age"
            placeholder="Age..."
            value={person.age}
            onChange={handleAgeChange}
            />

            <input
            type="text"
            name="location"
            placeholder="Location..."
            value={person.location}
            onChange={handleLocationChange}
            />

            <input
            type="text"
            name="date"
            placeholder="Date..."
            value={person.account_created}
            onChange={handleAccountChange}
            />

            <button type="submit">Join</button>
            </form>
        </div>
    )

}

export default AddPersonForm
























//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [location, setLocation] = useState('')
//     const [date, setDate] = useState('')

//     function handleAddNew(newPerson){
//         setPeople([...people, newPerson])
//     }

//     function handleSubmit(e){
//         e.preventDefault()

//         const newPerson = {
//             name: name,
//             age: age,
//             location: location,
//             date: date
//         };

//         fetch('http://localhost:9292/people', {
//             method: 'POST',
//             headers:{
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(newPerson)
//         })
//         .then((r) => r.json())
//         .then((newPerson) => {
//             handleAddNew(newPerson)
//             setName('')
//             setAge('')
//             setLocation('')
//             setDate('')
//         })
//     };

//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//             type="text"
//             name="name"
//             placeholder="Name..."
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />

//             <input
//             type="text"
//             name="age"
//             placeholder="Age..."
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             />

//             <input
//             type="text"
//             name="location"
//             placeholder="Location..."
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             />

//             <input
//             type="text"
//             name="date"
//             placeholder="Date..."
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             />

//             <button type="submit">Join</button>
//         </form>

//     )
// }

// export default AddPersonForm