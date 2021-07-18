import React from 'react'
import Card from '../Ui/Card'

import classes from './DisplayPersons.module.css'
import PersonList from './PersonList'
const DisplayPersons = props => {

    const deletePersonHandler = personId => {
        props.onDeletePersonById(personId)
    }
    return (
        <Card className={classes.DisplayPersons}>
            <PersonList OnDeletePersonId={deletePersonHandler} personData={props.personData}/>
        </Card>
    )
}

export default DisplayPersons
