import React from 'react'
import Buttons from './Button'
import Card from './Card'
import classes from './ModalOverlay.module.css'
const ModalOverlay = props => {


    return (
        <Card className={`${classes['Modal-overlay']} ${props.className} ${ props.show ? classes.show : ''} `}>
            <div className={`${classes['Modal-header']}`}>
                <h1 className={classes['Modal-title']}>{props.title}</h1>
            </div>
            <div className={classes['Modal-body']}>
                <p>{props.body}</p>
            </div>
            <div className={`${classes['Modal-footer']}`}>
                <Buttons onClick={props.hide} type={props.type} variant="danger">Close</Buttons>
            </div>
            </Card>
    )
}

export default ModalOverlay
