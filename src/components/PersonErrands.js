import React, { useState } from "react";
import EditErrandForm from "./EditErrandForm";

const PersonErrands = ({person, currentPerson, setCurrentPerson}) => {
    const {id, errand, date, time, location, address, commute} = person
    const [editEarrandFormFlag, setEditFormFlag] = useState(false);

    function handleUpdate(updatedErrand){
        const updatedErrands = currentPerson.errands.map((errand) => {
            if(errand.id === updatedErrand.id){
                return updatedErrand
            } else {
                return errand
            }
        });
        const updatedPersonErrands = {...currentPerson, errands: updatedErrands}
        setCurrentPerson(updatedPersonErrands)
        setEditFormFlag(false);
    }


    function handleDelete(id){
        const filterErrands = person.errands.map((errand) => errand.id !== id)
        const deletedErrand = {...person, filterErrands}
        setCurrentPerson(deletedErrand)
     }

     function handleDeleteComplete(){
        fetch(`http://localhost:9292/errands/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDelete(id))
     }


    return(

        <>
            {editEarrandFormFlag ?
            <>
            <center><h2>{errand}</h2></center>
            <EditErrandForm
            personErrands={person}
            handleUpdate={handleUpdate}/>
            </>
        :
            <>
        <center><h2>{errand}</h2></center>
            <hr className="errand-title"/>

            <center><h3>Date: {date}</h3></center>
            <center><h3>Time: {time}</h3></center>
            <center><h3>Location: {location}</h3></center>
            <center><h3>Address: {address}</h3></center>
            <center><h3>Commute: {commute}</h3></center>

            <center>
            <span><button onClick={() => setEditFormFlag((editErrand) => !editErrand)}>✏️</button></span>
            <span><button type="delete" onClick={handleDeleteComplete}>🗑</button></span>
            </center>
            </>
        }
        </>
    )
}

export default PersonErrands