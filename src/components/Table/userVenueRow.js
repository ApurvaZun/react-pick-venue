import React from 'react';

const UserVenueRow = ({ handleClick, selectVenue, topVenue }) => {
    return(
        <>
        {topVenue.map((venue) => (
            <div className="cell venue" onClick={() => handleClick(venue)}>
              {selectVenue === venue.id ? <i className="fas fa-check fa-lg"></i> : null}            
            </div>
        ))}
        </>
    )
}

export default UserVenueRow;