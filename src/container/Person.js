import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const Person = ({people, setPeople}) => {
    const [currentPerson, setCurrentPerson] = useState({errands: []})
    const params = useParams()

    useEffect(() => {
        const currentPerson = people.find((person) => person.id === params.id)
        if(currentPerson){
            setCurrentPerson(currentPerson)
        }
    }, [people])



    return(
        <h2>home</h2>
    )
}

export default Person