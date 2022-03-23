import Card from './Card'
import ReactDOM from 'react-dom';
import React from 'react';

const ModalOverlay = (props) => {
    return (
        <Card>
<div>Hello World</div>
        </Card>
    )
}

const Modal = (props) => {
    return (
        <React.Fragment>
{ReactDOM.createPortal(<ModalOverlay/>, document.getElementById('overlay-root'))}

        </React.Fragment>
    )
} 

export default Modal;