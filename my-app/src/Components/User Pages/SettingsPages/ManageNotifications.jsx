import React, { useState } from 'react';
import '../styles.css'
import PageTitle from "../PageTitle";
import CancelButton from '../../Buttons/CancelButton';
import ConfirmButton from '../../Buttons/ConfirmButton';

const ManageNotifications = ({setwpage}) => {
    /**
     * Need database to set these notification settings
     */
    const [textOn, setTextOn] = useState(false);
    const [successfulChangeMessage, setSuccessfulChangeMessage] = useState('');
    const handleChangeNotificationSettings = () => {
        
        // This should update the database with the preferred notification settings
        console.log('This should information changing Notification Settings!');
        console.log('Text:', textOn ? 'True' : 'False')
        setSuccessfulChangeMessage('Your preferences have been changed!')
    };

    return (
        <div className='backGround'>
            <>
        <PageTitle name="Manage Notifications" />
            <div className='form2'>
                <div className='label'>Please select your notification preferences below:</div><br />
                <div className='label' onClick={() => setTextOn(!textOn)}>Text: {textOn ? 'True' : 'False'}</div>
                <div className='label' style={{color: 'green'}}>{successfulChangeMessage}</div>
                <div className='buttonContainer'>
                    <br /><br />
                    <div className='button1'>
                        <CancelButton onClick={() => setwpage('Calendar')} />
                        <ConfirmButton buttonText='Confirm' onClick={handleChangeNotificationSettings}/>
                    </div>
                </div>
                
            </div>
        </>
        </div>
        
    );
}

export default ManageNotifications;