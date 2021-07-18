import React from 'react'
import classes from './Button.module.css'
import { Button } from 'react-bootstrap'
const Buttons = props => {
    return (
       <Button variant={props.variant } size={props.size} className={`${classes.Button} ${props.className}`} type={props.type} onSubmit={props.onSubmit} onClick={props.onClick}>
{props.children}
       </Button>
    )
}

export default Buttons
