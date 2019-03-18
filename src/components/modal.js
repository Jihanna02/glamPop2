import React from 'react';
import Flexbox from 'flexbox-react';

import './Modal.css';

export class Modal extends React.Component {
    render() {
        let x = this.props;
        const modalStyle = {
            display: `${x.showModal}`,  
            position: 'fixed', 
            zIndex: '100',  
            paddingTop: '100px',  
            left: '0',
            top: '0',
            width: '100%',  
            height:'100%',
            overflow: 'auto',  
            backgroundColor: 'rgba(0, 0, 0, 0.5)'  
        }
        
        const modalContent = {
            margin: 'auto',
            // display: 'inline',
            color: '#f1f1f1', 
            textAlign: 'center'
        }

        const closeStyle = {
            position: 'absolute',
            top: '15px',
            right: '35px',
            color: '#f1f1f1',
            fontSize: '40px',
            fontWeight: 'bold',
        }

        return ( 
            <Flexbox className='all-use-modal' style={modalStyle}>

                <p className='link'  onClick={() => {
                    x.closeModal('none')
                }} style={modalContent}>close</p>
                
                <div className='content-wrapper'>{x.content}</div>

            </Flexbox>
        )        
    }
   
}

export default Modal