import React, { useState, useRef } from 'react'
import Buttons from '../Ui/Button'
import Card from '../Ui/Card'
import classes from './AddPerson.module.css'

const InputForm = props => {

const nameInputRef = useRef();
const ageInputRef = useRef();

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const formSubmitHandler = event => {
        event.preventDefault()
        let errorType;
        const id = Math.random()
        if(name === '' || age ==='' ) {
        errorType = 'Please fill out the form!'
            props.onShowErrorModal(true, errorType)
        }else if(age < 0) {
            errorType = 'Please enter a valid age!'
            props.onShowErrorModal(true, errorType)
        }
        else{
            props.onGetPerson(name, age, id)
            setName('')
            setAge('')
        }
            
        
    }
    const addNameHandler = (event) => {
        setName(event.target.value)
    }
    const addAgeHandler = (event) => {
setAge(event.target.value)
    }
  
    return (
        <Card className={classes.form}>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.form__control}>
                <label htmlFor="name" className={classes.form__label} >Name</label>
                <input value={name} id="name" onChange={addNameHandler} type="text"/>
                </div>
        

                <div className={classes.form__control}>
                <label htmlFor="age" className={classes.form__label} >Age</label >
                <input value={age} id="age" onChange={addAgeHandler} type="number"/>
                </div>
        
            <Buttons  variant="primary" size="md" type="submit" >Add User</Buttons>
            </form>
        </Card>
    )
}

export default InputForm
