import React, { useState } from 'react';
import '../styles.css'
import CancelButton from '../../Buttons/CancelButton';
import ConfirmButton from '../../Buttons/ConfirmButton';

const MakeAppointment = ({ setSelectedTab, AppointmentInformation, setShowAddAppointment }) => {
    const handleAddAppointment = () => {
        /**
         * Connect with Backend API
         */
        console.log('Making Appointment for Customer');
    }
    
        return (
            <>
                <div style={{ position: 'absolute'}} className="form">
                    <label>Trainer Name:</label>
                    <input
                        type="text"
                        value={'Trainer Name'}
                        className='input2'
                    />
                    <br/>

                    <label>Date:</label>
                    <input
                        type="text" 
                        className='input2'
                        value={AppointmentInformation.date}
                    />
                    <br/>
                
                    <label>Start Time:</label>
                    <input
                        type="text"
                        value={AppointmentInformation.startTime}
                        className='input2'
                    />
                    <br />
                    
                    <label>End Time:</label>
                    <input
                        type="text"
                        value={AppointmentInformation.endTime}
                        className='input2'
                    />
                    <br />
                    
                    <label>Lesson Style:</label>
                <input
                    type="text"
                        value={AppointmentInformation.ridingStyle}
                        className='input2'
                    /> 
                    <br/>
                     <label>Lesson Type:</label>
                <input
                    type="text"
                    value={AppointmentInformation.isGroup ? 'Group' : 'Individual'}
                    className='input2'
                    />
                    <div>Spots left {AppointmentInformation.remainingSpots}</div>

                    <CancelButton onClick={() => setShowAddAppointment(false)} />
                    <ConfirmButton buttonText={'Add'} onClick={() => handleAddAppointment} />
                </div>
            </>
        
        );
}

export default MakeAppointment;