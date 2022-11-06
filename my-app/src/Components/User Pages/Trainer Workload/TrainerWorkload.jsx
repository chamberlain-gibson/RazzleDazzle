import React, { useState } from 'react';
import PageTitle from '../PageTitle';
import AddCustomres from './AddCustomer';
import RemoveCustomers from './RemoveCustomers';

const ManageAppointment = () => {
    const [selectedTab, setSelectedTab] = useState('Add Customers');

    const ChosenPopup = () => {
        let popup;

        if (selectedTab === 'Remove Customers') {
            popup = <RemoveCustomers setSelectedTab={setSelectedTab} />
        } else {
            popup = <AddCustomres setSelectedTab={setSelectedTab} />
        } 

        return (popup);
    };

    const tabs = (
        <div className='subTitle1'>
            <div
                className={`subLeft3 ${selectedTab === 'Add Customers' ? 'activeSubtitle' : ''}`}
                // className='subLeft2'
                onClick={() => setSelectedTab('Add Customers')}>Add Customers</div>
            <div
                className={`subRight3 ${selectedTab === 'Remove Customers' ? 'activeSubtitle' : ''}`}
                // className='subRight2'
                onClick={() => setSelectedTab('Remove Customers')}>Remove Customers</div>
            <hr className="titleunderline2"></hr>
        </div>
    );

    return (
        <div className='backGround'>
            <PageTitle name="Edit Trainer Workload" />
            {tabs}
            <div className='form2'>
                <ChosenPopup />
            </div>
            
        </div>
    );
}

export default ManageAppointment;