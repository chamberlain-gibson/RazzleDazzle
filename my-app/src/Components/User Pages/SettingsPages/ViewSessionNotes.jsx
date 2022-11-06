import React from "react";
import '../styles.css'
import PageTitle from "../PageTitle";

const ViewSessionNotes = () => {
    // Need to get Session Note Data from API
    const sessionNotesData = [{
        Date: '10/10/2019',
        Note: 'Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra orci sagittis eu volutpat odio facilisis.',
    },
    {
        Date: '10/30/2020',
        Note: 'Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra orci sagittis eu volutpat odio facilisis.',
    },
    {
        Date: '11/30/2020',
        Note: 'Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra orci sagittis eu volutpat odio facilisis.',
    },
    ];

    const sessionNotesList = sessionNotesData.map((data) => (
        <div className="sessionNote">
            <span className="sessionTitle">{data.Date}</span>
            <hr className="sessionHR"></hr>
            <p className="sessionDescription">{data.Note}</p>
        </div>
    ));
            
    return (
        <div className="backGround">
        <>
            <PageTitle name="View Session Notes" />
            <div>
                <div className="label3">
                    {sessionNotesList}
                </div>
                
            </div>
        </>
        </div>
    );
}

export default ViewSessionNotes;