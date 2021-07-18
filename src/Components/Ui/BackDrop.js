import React from 'react'

import classes from './Backdrop.module.css'

const BackDrop = props => {
    return (
        <div show={props.show} onClick={props.hide} className={`${classes.BackDrop} ${props.className} ${ props.show ? classes.show : ''}`}>
            
        </div>
    )
}

export default BackDrop
