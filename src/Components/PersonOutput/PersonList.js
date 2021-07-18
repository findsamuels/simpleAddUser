import React from 'react'
import classes from './PersonList.module.css'
import {ListGroup,ListGroupItem} from 'react-bootstrap'
const PersonList = props => {

    const removePerson = personId => {

        props.OnDeletePersonId(personId)
        
    }


    let personLists = <ListGroupItem>No Person added please add person</ListGroupItem>

    
   
        if(props.personData.length > 0){
            personLists = props.personData.map( person => {
               return(
                   <ListGroupItem className={classes.PersonLists__item} onClick={(event) => {removePerson(person.id)}}   key={person.id}>
                       <p>Name: {person.name}</p>
                       <p>Age: {person.age} years old</p>
                        </ListGroupItem>
               )
            
            })
        }

    return (
        <ListGroup className={classes.PersonList}>
{personLists}
        </ListGroup>
            
        
    )
}

export default PersonList
