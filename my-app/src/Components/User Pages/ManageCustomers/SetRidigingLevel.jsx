import React, { useState } from 'react';
import ConfirmButton from '../../Buttons/ConfirmButton';
import CancelButton from '../../Buttons/CancelButton';
const AccessTrainer = () => {
    /**
     * Need API to get Trainer names, styles, and personal information
     */
    /**
     * Replace following object with information from the backend
     */
    const [ridingLevel, SetRidigingLevel] = useState('');
    const [AvailableCustomers, setAvailableCustomers] = useState([{
        id: '1',
        FirstName: 'John',
        LastName: 'Doe',
        Style: 'Western',
        Level: 'Beginner',
        isPreffered: false,
    },
    {
        id: '2',
        FirstName: 'Jane',
        LastName: 'Doe',
        Style: 'English',
        Level: 'Expert',
        isPreffered: true,
    },
    {
        id: '3',
        FirstName: 'James',
        LastName: 'Doe',
        Email: 'jamesDoe@gmail.com',
        Address: '1234 Address',
        Style: 'Show',
        Level: 'Intermediate',
        isPreffered: false,
    },]);
    
    const handleSetPrefferedTrainer = ({ data }) => {
        setAvailableCustomers([...AvailableCustomers].map(object => {
            // Need a Trainer ID for these
            if (object.id === data.id) {
                return {
                    ...object,
                    isPreffered: true,
                }
            }
            else return {
                ...object,
                isPreffered: false,
            };
        }))
    }

    const handleEditCustomer = () => {
        /**
         * Send Information to Database
         */
        setAvailableCustomers([...AvailableCustomers].map(object => {
            // Need a Trainer ID for these
            if (object.isPreffered) {
                return {
                    ...object,
                    Level: ridingLevel,
                }
            }
            else return {
                ...object,
            };
        }))
    };

    const trainersList =
        AvailableCustomers.map((data) => (
            data.isPreffered === true ?
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',                   
                }}>
                    <span style={{ backgroundColor: '#FFFF00' }}>{`${data.FirstName} ${data.LastName}` }</span>
                    <span style={{ backgroundColor: '#FFFF00' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#FFFF00' }}>{data.Level}</span>
                </div>
                :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                }}
                    onClick={() => handleSetPrefferedTrainer({ data })}>
                    <span >{`${data.FirstName} ${data.LastName}` }</span>
                    <span >{data.Style}</span>
                    <span >{data.Level}</span>
                
                </div>

        ))
            
    const PreferredTrainerFormHeading = (
        <div style={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '300px'
            }
        }>
            <div>Trainer</div>
            <div>Style</div>
            <div>Experience</div>
        </div>
    )  

    return (
        <div>
            {PreferredTrainerFormHeading && trainersList}
            <form>
                <label>Beginner: </label>
                <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Beginner')}/>
                <label>Intermediate: </label>
                <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Intermediate')}/>
                <label>Advanced: </label>
                <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Advanced')}/>
            </form>
            <CancelButton/>
            <ConfirmButton buttonText={'Change'} onClick={handleEditCustomer} />
        </div>
    );
}

export default AccessTrainer;