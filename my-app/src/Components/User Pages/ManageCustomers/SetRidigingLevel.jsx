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
                    alignContent: 'center',
                    textAlign: 'center',
                    marginLeft: '40px',
                    marginRight: '40px',                
                }}>
                    <span style={{ backgroundColor: '#727070' }}>{`${data.FirstName} ${data.LastName}` }</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Level}</span>
                </div>
                :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignContent: 'center',
                    textAlign: 'center',
                    borderBottom: '1px solid black', 
                    marginLeft: '40px',
                    marginRight: '40px',
                }}
                    onClick={() => handleSetPrefferedTrainer({ data })}>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{`${data.FirstName} ${data.LastName}` }</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Level}</span>
                
                </div>

        ))
            
    const PreferredTrainerFormHeading = (
        <div style={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: '40px',
            marginRight: '40px', 
            
        }}>
            <div>Trainer</div>
            <div>Style</div>
            <div>Experience</div>
        </div>
    )  

    return (
        <div>
            {PreferredTrainerFormHeading && trainersList}
            <br />
            <form>
                    <label className='label2Alt1'>Beginner: </label>
                    <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Beginner')}/>
                    <label className='label2Alt2'>Intermediate: </label>
                    <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Intermediate')}/>
                    <label className='label2Alt3'>Advanced: </label>
                    <input type="radio" name="experienceLevel" onClick={() => SetRidigingLevel('Advanced')}/>
            </form>
            <div className='buttonContainer'>
                <br /><br />
                <div className='button1'>
                    <CancelButton/>
                    <ConfirmButton buttonText={'Change'} onClick={handleEditCustomer} />
                </div>
            </div>
            
        </div>
    );
}

export default AccessTrainer;