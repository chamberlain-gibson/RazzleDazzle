import React, { useState } from 'react';
import CancelButton from "../../../Buttons/CancelButton";
import ConfirmButton from "../../../Buttons/ConfirmButton";

const AddTrainer = () => {
    const [adminOn, setAdminOn] = useState(false);
    const [trainerOn, setTrainerOn] = useState(false);
    const [trainerAddedUpdateMessage, setTrainerAddedUpdateMessage] = useState('');

     const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
    
    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
        console.log('firstName', values.firstName);
    };

    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
        console.log('lastName', values.lastName);
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
        console.log('email', values.email);
    };
    
    const handleAddressInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
        console.log('address', values.address);
    };  

    const handleAddTrainer = () => {
        /**
         * Configure database to recieve trainer information
        */
        if (values.firstName && values.lastName && values.email && values.address) {
            console.log('Successful Addition of Trainer!')
            setValues((values) => ({
                ...values,
                firstName: '',
                lastName: '',
                email: '',
                address: '',
            }));
            setTrainerAddedUpdateMessage('Trainer has been added!');
        } else {
            console.log('Unsuccessful Addition of Trainer!')
        }
    }; 

    const handleCancelAddTrainer = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: '',
            lastName: '',
            email: '',
            address: '',
        }));
        console.log('address', values.address);
    };  

    return (
        <div>
            <div className='inputTitles1'>
                <label className='label'>First Name:</label>
            </div>
            <div className='inputBoxes1'>
                <input className='input2'
                    type="text"
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                />
            </div>
            <br/><br />
            
            <div className='inputTitles2'>
                <label className='label'>Last Name:</label>
            </div>
            <div className='inputBoxes2'>
                <input className='input2'
                    type="text"
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                />
            </div>
            <br/><br />   
            
            <div className='inputTitles3'>
                <label className='label'>Email Address:</label>
            </div>
            <div className='inputBoxes3'>
                <input className='input2'
                    type="text"
                    onChange={handleEmailInputChange}
                    value={values.email}
                />
            </div>
            <br/><br />   
            
            <div className='inputTitles4'>
                <label className='label'>Address:</label>
            </div>
            <div className='inputBoxes4'>
                <input className='input2'
                    type="text"
                    onChange={handleAddressInputChange}
                    value={values.address}
                />
            </div>
            <br/><br />
            
            <div className='inputTitles5'>
                <label className='label'>Trainer Permissions:</label>
            </div>
            <br /><br />
            
            
            {/* <div onClick={() => setTrainerOn(!trainerOn)}>Trainer: {trainerOn ? 'True' : 'False'}</div> */}
            <div className='inputTitles6'>
                <div className='label' onClick={() => setAdminOn(!adminOn)}>Admin: {adminOn ? 'True' : 'False'}</div>
            </div>
            <br/><br />

            <div>{trainerAddedUpdateMessage}</div>
            <br /><br />
            <div className='buttonContainer'>
                <div className='button1'>
                    <CancelButton onClick={handleCancelAddTrainer}/>
                    <ConfirmButton style={{paddingLeft: '20px'}} onClick={handleAddTrainer} buttonText="Add" />
                    
                </div>
                
                
                
            </div>
            
        </div>
    );
}

export default AddTrainer;