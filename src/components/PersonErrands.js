import React, { useState } from "react";
import EditErrandForm from "./EditErrandForm";
import { useParams } from "react-router-dom";
const PersonErrands = ({errands, people, setPeople, currentPerson, setCurrentPerson}) => {
    const {errand, date, time, location, address, commute, am_pm} = errands
    const [editEarrandFormFlag, setEditFormFlag] = useState(false);
    const params = useParams()

    const editErrand = (errand) => {
        fetch(`http://localhost:9292/people/${currentPerson.id}/errands/${errands.id}`, {   //people/currentPerson.id/errands/${}
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(errand)
        })
        .then((r) => r.json())
        .then((updatedErrand) => {
            const currentPersonErrands = currentPerson.errands.map((errand) => {
                if(errand.id === updatedErrand.id) {
                    console.log('updated', updatedErrand)
                    return updatedErrand
                } else {
                    console.log('non updated', errand)
                    return errand
                }
            })


            const peopleErrands = people.map((person) => {
                if(person.id === updatedErrand.person_id){
                    return {
                        ...currentPerson,
                        errands: currentPersonErrands
                    }
                } else {
                    return person
                }
            })
            setPeople(peopleErrands)
            setEditFormFlag(false)
        })
    }


    const deleteErrand = (errandId) => {
        fetch(`http://localhost:9292/people/${currentPerson.id}/errands/${errands.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            const currentPersonDeletedErrands = currentPerson.errands.filter((errand) => errand.id !== errandId)
            setCurrentPerson({
                ...currentPerson,
                errands: currentPersonDeletedErrands
            })

            const peopleDeletedErrands = people.map((person) => {
                if(person.id === currentPerson.id){
                    return {
                        ...person,
                        errands: currentPersonDeletedErrands
                    }
                } else {
                    return person
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
        <center><div className="errand-title-div"><h2>{errand}</h2></div></center>
            <hr className="errand-title"/>

            <center><h3>Date: {date}</h3></center>
            <center><h3>Time: {time} {am_pm}</h3></center>
            <center><h3>Location: {location}</h3></center>
            <center><h3>Address: {address}</h3></center>
            <center><h3>Commute: {commute}</h3></center>

            <center>
            <span><button className="edit-errand-button" onClick={() => setEditFormFlag((editErrand) => !editErrand)}>✏️</button></span>
            <span><button className="edit-errand-button" type="delete" onClick={() => deleteErrand(errands.id)}>🗑</button></span>
            <hr/>
            </center>
            </>
        }
        </>
    )
}

export default PersonErrands