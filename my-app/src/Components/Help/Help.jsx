import React from 'react';
import './styles.css'

const Help = ({ wpage, userPermissions }) => {
    let relativeOrAbsoluteURL = 'https://www.google.com'
    
    /**
     * Input Conditionals Here to get
     */
    if (userPermissions.isAdmin) {
        relativeOrAbsoluteURL = 'https://www.youtube.com'
    } else if (userPermissions.isTrainer) {
        relativeOrAbsoluteURL = 'https://www.linkedin.com'
    } else {
        relativeOrAbsoluteURL = 'https://www.instagram.com'
    }


    const absoulteUrl = new URL(relativeOrAbsoluteURL).href

    // To-do: Add help Icon later
    return (
        <a className="helpIcon" href={absoulteUrl} target={'_blank'} rel="noopener noreferrer external">
            <div className="floatingIcon">?</div>
            <div className='hide'>Help</div>
        </a>
    );
}

export default Help;

