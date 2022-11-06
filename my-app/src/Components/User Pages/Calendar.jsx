import React, { useState } from 'react';
import './styles.css'
import './Calendar/Styes.css'

import PageTitle from "./PageTitle";
import ReactCalendar from 'react-calendar';
import AvailableAppointments from './AvailableAppointments';
import MyCalendarView from './MyCalendarView';
import AdminCalendarView from './AdminCalendarView';
// import DayView from './Calendar/DayView';
import AddAppointment from './SettingsPages/AddAppointment';

const Calendar = ({userPermissions}) => {
    const [selectedTab, setSelectedTab] = useState('Available Appointments');
    const [showAddAppointment, setShowAddAppointment] = useState();
   const [events, setEvents] = useState([
      {
        trainerNames: 'John Doe',
        appointmentId: '1',
        date: '10/29/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: false,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      },
      {
        trainerNames: 'Jane Doe',
        appointmentId: '2',
        date: '10/30/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: false,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      },
      {
        trainerNames: 'James Doe',
        appointmentId: '3',
        date: '10/31/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: false,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      },
      {
        trainerNames: 'John Doe',
        appointmentId: '4',
        date: '11/01/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: true,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      },
      {
        trainerNames: 'John Doe',
        appointmentId: '5',
        date: '11/02/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: true,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'

      },
      {
        trainerNames: 'John Doe',
        appointmentId: '6',
        date: '11/03/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: true,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      },
      {
        trainerNames: 'John Doe',
        appointmentId: '7',
        date: '11/04/2022',
        startTime: '8am',
        endTime: '10am',
        ridingStyle: 'Western',
        ridingLevel: 'Beginner',
        isGroup: true,
        signedUp: false,
        remainingSpots: 8,
        hasTrainee: true,
        lessonType: 'Group'
      }
   ])

    function handleCancel () {
        setShowAddAppointment();
    }

    /**
     * Schedule My Calendar View week view
     */
    let myAppointments = [];
    if (userPermissions.isCustomer === true) {
        myAppointments = events.filter(appointment => appointment.signedUp);
    } else if (userPermissions.isTrainer === true) {
        myAppointments = events.filter(appointment => appointment.hasTrainee)
    } else {
        myAppointments = events.filter(appointment => appointment.hasTrainee)
    }

    /**
     * List out all available appointments
     */
    let availableAppointments = events.filter(appointment => (!appointment.signedUp && appointment.remainingSpots > 0))

    const ChosenPopup = () => {
        let popup;

        if (selectedTab === 'Available Appointments') {
            popup = <AvailableAppointments setSelectedTab={setSelectedTab} availableAppointments={availableAppointments} userPermissions={userPermissions}/>;
        } else {
            userPermissions.isAdmin ?
                popup = <AdminCalendarView setSelectedTab={setSelectedTab} UserSchdeule={myAppointments} userPermissions={userPermissions} />
                : popup = <MyCalendarView setSelectedTab={setSelectedTab} UserSchdeule={myAppointments} userPermissions={userPermissions} />;
        }
        return (popup);
    };

    const tabs = (
        <div className='subTitle1'>
        <div
          className={`subLeft3 ${selectedTab === 'Available Appointments' ? 'activeSubtitle' : ''}`}
          onClick={() => setSelectedTab('Available Appointments')}>Available Appointments</div>
        <div
          className={`subRight3 ${selectedTab === 'My Calendar View' ? 'activeSubtitle' : ''}`}
          onClick={() => setSelectedTab('My Calendar View')}>My Calendar</div>
            <hr className="titleunderline2"></hr>
        </div>
    );

    return ( 
    <div className="backGround"> 
            <PageTitle name="Calendar" />
            {tabs}
            <ReactCalendar />
            {showAddAppointment}
            <div style={{ color: 'blue', marginLeft: '50%' }} onClick={() => setShowAddAppointment(<AddAppointment setShowAddAppointment={setShowAddAppointment}></AddAppointment>)}>Make Appointment</div>
            <ChosenPopup />
    </div>
    );
}

export default Calendar;