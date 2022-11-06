import React, { useState } from 'react';
import ConfirmButton from '../../Buttons/ConfirmButton';
import CancelButton from '../../Buttons/CancelButton';

const DeleteCustomer = () => {
    /**
     * Replace following object with information from the backend
     */
    const [AvailableCustomers, setAvailableCustomers] = useState([{
        Customer: 'John Doe',
        Style: 'Western',
        Level: 'Beginner',
        isPreffered: false
    },
    {
        Customer: 'Jane Doe',
        Style: 'English',
        Level: 'Intermediate',
        isPreffered: true

    },
    {
        Customer: 'James Doe',
        Style: 'Show',
        Level: 'Expert',
        isPreffered: false

    },]);
    
    const handleSetDeleteCustomer = ({ data }) => {
        setAvailableCustomers([...AvailableCustomers].map(object => {
            if(object.Customer === data.Customer) {
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

    const handleCancelDeleteCustomer = (event) => {
        event.preventDefault();

        setAvailableCustomers([...AvailableCustomers].filter(object =>
            object.isPreffered !== true))       
    };

    const handleDeleteCustomer = (event) => {
        event.preventDefault();

        setAvailableCustomers([...AvailableCustomers].filter(object =>
            object.isPreffered !== true))       
        
        /**
         * Update Database here
         */
    };

    const CustomersList = 
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
                    <span style={{ backgroundColor: '#727070' }}>{data.Customer}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#727070' }}>{data.Level}</span>
                
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
                    onClick={() => handleSetDeleteCustomer({ data })}>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Customer}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Style}</span>
                    <span style={{ backgroundColor: '#D9D9D9' }}>{data.Level}</span>
                
                </div>

        ))
            
    const PreferredCustomerFormHeading = (
        <div style={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            marginLeft: '40px',
            marginRight: '40px', 
        }}>
            <div>Customer</div>
            <div>Style</div>
            <div>Level</div>
        </div>
    )
    
    return (
        <div>
            {PreferredCustomerFormHeading}
            <br />
            {CustomersList}
            <div className='buttonContainer'>
                <br /><br />
                <div className='button1'>
                    <CancelButton onClick={handleCancelDeleteCustomer} />
                    <ConfirmButton buttonText={'Delete'} onClick={handleDeleteCustomer} />
                </div>
            </div>
            
        </div>
    );
}

export default DeleteCustomer;