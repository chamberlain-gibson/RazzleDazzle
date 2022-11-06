import React, { useState } from 'react';
import ConfirmButton from '../../../Buttons/ConfirmButton';
import CancelButton from '../../../Buttons/CancelButton';

const RemoveTrainer = () => {
    /**
     * Replace following object with information from the backend
     */
    const [AvailableTrainers, setAvailableTrainers] = useState([{
        Trainer: 'John Doe',
        Style: 'Western',
        Experience: '1',
        isPreffered: false
    },
    {
        Trainer: 'Jane Doe',
        Style: 'English',
        Experience: '2',
        isPreffered: true

    },
    {
        Trainer: 'James Doe',
        Style: 'Show',
        Experience: '3',
        isPreffered: false

    },]);
    
    const handleSetRemoveTrainer = ({ data }) => {
        setAvailableTrainers([...AvailableTrainers].map(object => {
            if(object.Trainer === data.Trainer) {
              return {
                ...object,
                isPreffered: true,
              }
            }
            else return {
                ...object,
            };
          }))
    }

    const handleCancelRemoveTrainer = (event) => {
        event.preventDefault();

        setAvailableTrainers([...AvailableTrainers].filter(object =>
            object.isPreffered !== true))       
    };

    const handleRemoveTrainer = (event) => {
        event.preventDefault();

        setAvailableTrainers([...AvailableTrainers].filter(object =>
            object.isPreffered !== true))       
        
        /**
         * Update Database here
         */
    };

    const trainersList = 
        AvailableTrainers.map((data) => (
            data.isPreffered === true ?
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignContent: 'center',
                    textAlign: 'center',
                    marginLeft: '40px',
                    marginRight: '40px',                 
                }}>
                    <span style={{ backgroundColor: '#727070' }}>{data.Trainer}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Experience}</span>
                
                </div> :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignContent: 'center',
                    textAlign: 'center',
                    borderBottom: '1px solid black', 
                    marginLeft: '40px',
                    marginRight: '40px',
                }}
                    onClick={() => handleSetRemoveTrainer({ data })}>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Trainer}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Experience}</span>
                
                </div> 
        ) )
            
    const PreferredTrainerFormHeading = (
        <div style={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: '40px',
            marginRight: '40px',  
            }
        }>
            <div>Trainer</div>
            <div>Style</div>
            <div>Experience</div>
        </div>
    )
    
    return (
        <div>
            {AvailableTrainers.length > 0 ?
                PreferredTrainerFormHeading : <div>No trainers to available to remove</div>}
            <br />
            {trainersList}
            <div className='buttonContainer'>
                <br /><br />
                <div className='button1'>
                    <CancelButton onClick={handleCancelRemoveTrainer} />
                    <ConfirmButton buttonText={'Remove Trainer'} onClick={handleRemoveTrainer} />
                </div>
            </div>
            
        </div>
    );
}

export default RemoveTrainer;