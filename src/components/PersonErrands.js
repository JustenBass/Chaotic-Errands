import React, { useState } from "react";
import EditErrandForm from "./EditErrandForm";
import { useParams } from "react-router-dom";
const PersonErrands = ({errands, people, setPeople, currentPerson, setCurrentPerson}) => {
    const {id, errand, date, time, location, address, commute} = errands
    const [editEarrandFormFlag, setEditFormFlag] = useState(false);


    const editErrand = (errand) => {
        fetch(`http://localhost:9292/errands/${id}`, {   //people/currentPerson.id/errands/${}
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(errand)
        })
        .then((r) => r.json())
        .then((updatedErrand) => {
            const newPersonErrands = currentPerson.errands.map((errand) => {
                if(errand.id === updatedErrand.id) {
                    console.log('updated', updatedErrand)
                    return updatedErrand
                } else {
                    console.log('non updated', errand)
                    return errand
                }
            })


            const newPeopleErrands = people.map((person) => {
                if(person.id === updatedErrand.person_id){
                    return {
                        ...currentPerson,
                        errands: newPersonErrands
                    }
                } else {
                    return person
                }
            })
            setPeople(newPeopleErrands)
            setEditFormFlag(false)
        })
    }


    const deleteErrand = (ident) => {
        fetch(`http://localhost:9292/errands/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            const deletedErrands = currentPerson.errands.filter((errand) => errand.id !== ident)

            const peopleDeletedErrands = people.map((errand) => {
                if(errand.id === ident.person_id){
                    return {
                        ...currentPerson,
                        errands: deletedErrands
                    }
                } else {
                    return errand
                }
            })
            setPeople(peopleDeletedErrands)
        })
    }
    return(

        <>
            {editEarrandFormFlag ?
            <>
            <center><h2>{errand}</h2></center>
            <EditErrandForm
            editErrand={editErrand}
            currentPerson={currentPerson}
            errands={errands}
            />
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
            <span><button type="delete" onClick={deleteErrand}>🗑</button></span>
            </center>
            </>
        }
        </>
    )
}

export default PersonErrands