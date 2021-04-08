import React from 'react';

const UserRow = ( {users, topVenue}) => {
    return(
        <>
            {users &&
          users.map((user, i) => (
            <div key={user.venueId} className="row">
                <div className="cell first">{user.name}</div>
              {topVenue.map((venue) => {
                const cell_color = venue.id === user.venueId ? "cell cell_dark_pistachio" : "cell venue";
                return (
                  <div key={venue.id} className={cell_color}>{venue.id === user.venueId ? 
                  <span>
                    <i className="fas fa-check fa-lg"></i>
                  </span> : null }</div>
                )
                
                })}
            </div>
          ))}
        </>
    )
}

export default UserRow;