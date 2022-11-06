import './App.css';
import React, { useState } from 'react';

import Banner from './Components/Banner/Banner'
import AboutUs from './Components/User Pages/AboutUs';
import Services from './Components/User Pages/Services';
import News from './Components/User Pages/News';
import LogIn from './Components/User Pages/LogIn';
import SignUp from './Components/User Pages/SignUp';
import Calendar from './Components/User Pages/Calendar';
import ForgotPassword from './Components/User Pages/ForgotPassword';
import ChangePassword from './Components/User Pages/SettingsPages/ChangePassword';
import ManageNotifications from './Components/User Pages/SettingsPages/ManageNotifications';
import ViewSessionNotes from './Components/User Pages/SettingsPages/ViewSessionNotes';
import DeleteAccount from './Components/User Pages/SettingsPages/DeleteAccount';
import PreferredTrainer from './Components/User Pages/SettingsPages/PreferredTrainer';
import AddEditSessionNotes from './Components/User Pages/SettingsPages/AddEditSessionNotes';
import NotifyCustomers from './Components/User Pages/SettingsPages/NotifyCustomers';
import EditPersonalInformation from './Components/User Pages/SettingsPages/EditPersonalInformation';
import ManageAppointment from './Components/User Pages/ManageAppointment'
import AddEditNews from './Components/User Pages/SettingsPages/AddEditNews';
import ManageTrainers from './Components/User Pages/ManageTrainers';
import ManageCustomers from './Components/User Pages/ManageCustomers/ManageCustomers';
import TrainerWorkload from './Components/User Pages/Trainer Workload/TrainerWorkload';
import HorseWatermark from './Components/User Pages/Assets/FINALWATERMARK.jpg';
import Help from './Components/Help/Help.jsx';
function App() {
  const [wpage, setwpage] = useState('About Us')
  const [signedIn, setSignedIn] = useState(false)
  /**
   * Backend needs to assign this
   */
  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      title: 'title1',
      url: 'website1',
      image: 'image1',
      description: 'description1',
    },
    {
      id: 2,
      title: 'title2',
      url: 'website2',
      image: 'image2',
      description: 'description2',
    },
    {
      id: 3,
      title: 'title3',
      url: 'website3',
      image: 'image3',
      description: 'description3',
    },
    {
      id: 4,
      title: 'title4',
      url: 'website4',
      image: 'image4',
      description: 'description4',
    },
    {
      id: 5,
      title: 'title5',
      url: 'website5',
      image: 'image5',
      description: 'description5',
    },
  ])

  /**
   * We need backend to validate when the user signs in who they are
   */
  const [userPermissions, setUserPermissions] = useState({
    isAdmin: true,
    isTrainer: false,
    isCustomer: false,
  })
  
  const ChosenWebpage = () => {
    let chosenpage;
    if(wpage === 'News') {
      chosenpage = <News newsArticles={newsArticles} />
    } else if (wpage === 'Services') {
      chosenpage = <Services/>
    } else if (wpage === 'Log In') {
      chosenpage = <LogIn setSignedIn={setSignedIn} setwpage={setwpage} />
    } else if (wpage === 'Sign Up') {
      chosenpage = <SignUp setSignedIn={setSignedIn} setwpage={setwpage} />
    } else if (wpage === 'Calendar') {
      chosenpage = <Calendar userPermissions={userPermissions} />
    } else if (wpage === 'Edit Personal Information') {
      chosenpage = <EditPersonalInformation setwpage={setwpage} />
    } else if (wpage === 'Change Password') {
      chosenpage = <ChangePassword setwpage={setwpage}/>
    }else if (wpage === 'Manage Notifications') {
      chosenpage = <ManageNotifications setwpage={setwpage} />
    }else if (wpage === 'View Session Notes') {
      chosenpage = <ViewSessionNotes />
    }else if (wpage === 'Add/Edit News') {
      chosenpage = <AddEditNews setSignedIn={setSignedIn} setwpage={setwpage} />
    }else if (wpage === 'Notify Customers') {
      chosenpage = <NotifyCustomers setwpage={setwpage} />
    } else if (wpage === 'Manage Appointments') {
      chosenpage = <ManageAppointment setwpage={setwpage}/>
    } else if (wpage === 'Delete Account') {
      chosenpage = <DeleteAccount setSignedIn={setSignedIn} setwpage={setwpage} />
    }  else if (wpage === 'Preferred Trainer') {
      chosenpage = <PreferredTrainer setwpage={setwpage} />
    } else if (wpage === 'Add/Edit Session Notes') {
      chosenpage = <AddEditSessionNotes setwpage={setwpage} />
    } else if (wpage === 'Manage Trainers') {
      chosenpage = <ManageTrainers setwpage={setwpage} />
    } else if (wpage === 'Manage Customers') {
      chosenpage = <ManageCustomers setwpage={setwpage} />
    } else if (wpage === 'Edit Trainer Workload') {
      chosenpage = <TrainerWorkload setwpage={setwpage}/>
    } else if (wpage === 'Forgot Password') {
      chosenpage = <ForgotPassword setwpage={setwpage}/>
    }
    else {
      chosenpage = <AboutUs/>
    }
    return (chosenpage);
    // return (<TrainerWorkload></TrainerWorkload>)
  };


  /**
   * Sets background to be a certain color
   */
  document.body.style = 'background: #D0D0D0;';
  
  // document.body.style = 'backgroundImage: `url(${HorseWatermark})`';
  // 'backgroundImage: url("./Components/User Pages/Assets/FINALWATERMARK.jpg")';
  // backgroundImage:"url(/UpmostlyLogo.png)"
  // Or with CSS
  // document.body.classList.add('background-red');
  const webpage = (
    <div>
      <img src={HorseWatermark} className='watermarkBack' alt="Horse Watermark" />
      <Banner setwpage={setwpage} wpage={wpage} signedIn={signedIn} userPermissions={userPermissions} setSignedIn={setSignedIn} />
      <Help wpage={wpage} userPermissions={userPermissions} />
      <ChosenWebpage  />
    </div>
  );
  return (
  webpage
  );
}


export default App;
