import React  from 'react'
import ReactDom from 'react-dom'
import BackDrop from './BackDrop'
import ModalOverlay from './ModalOverlay'




const ErrorModal = props => {

    
    return (
       <React.Fragment>
           {ReactDom.createPortal(<BackDrop show={props.show} hide={props.hide}/>, document.getElementById('backdrop-root'))}
           {ReactDom.createPortal(<ModalOverlay hide={props.hide} show={props.show} title={props.title} body={props.body}/>, document.getElementById('overlay-root') )}
       </React.Fragment>
    )
}

export default ErrorModal
